import React, { useEffect } from "react";
import { EmailStyle } from "./EmailSignUpComponent.styled";
import { useForm } from "@inertiajs/react";

const EmailSignUpComponent = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
    });
    const [message, setMessage] = React.useState("");

    useEffect(() => {
        return () => {
            if (message) {
                // Clear the success message after 5 seconds (5000 milliseconds)
                const timer = setTimeout(() => {
                    setMessage("");
                }, 5000);

                return () => clearTimeout(timer);
            }
        };
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/email-signup", {
            preserveState: true,
            onSuccess: () => {
                setMessage("Subscription successful! Thanks for signing up.");
                reset(); // Reset the form data
            },
        });
    };

    return (
        <EmailStyle>
            {/* Display server-side form errors and success message */}
            {errors.name && <div className="error-message">{errors.name}</div>}
            {errors.email && (
                <div className="error-message">{errors.email}</div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    disabled={processing}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    defaultValue={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    disabled={processing}
                />
                <input
                    type="submit"
                    defaultValue="Subscribe"
                    disabled={processing}
                />
            </form>
            {message && <div className="success-message">{message}</div>}
        </EmailStyle>
    );
};

export default EmailSignUpComponent;
