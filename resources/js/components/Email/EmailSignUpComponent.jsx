// Import React, useState hook, and usePage from Inertia
import React, { useState } from "react";
import { EmailStyle } from "./EmailSignUpComponent.styled";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const EmailSignUpComponent = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);
    const { flash } = usePage().props || {}; // Ensure that props is an object
    const [message, setMessage] = useState(flash?.success || ""); // Use optional chaining

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
        if (submitted) setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        router.post("/email-signup", formData, {
            preserveState: true,
            onSuccess: () => {
                setMessage("Subscription successful! Thanks for signing up.");
                setFormData({ name: "", email: "" }); // Reset form data
                setSubmitted(true);

                // Clear the success message after 5 seconds (5000 milliseconds)
                setTimeout(() => {
                    setMessage("");
                }, 5000);
            },
        });
    };

    return (
        <EmailStyle>
            {/* Display flash message or any other message */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input type="submit" value="Subscribe" />
            </form>
            {message && <div className="success-message">{message}</div>}
        </EmailStyle>
    );
};

export default EmailSignUpComponent;
