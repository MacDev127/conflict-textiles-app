import React, { useState } from "react";
import { EmailStyle } from "./EmailSignUpComponent.styled";
import { useForm } from "@inertiajs/react";
import AlertComponent from "@/components/Alert/AlertComponent";

const EmailSignUpComponent = () => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
    });

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/email-signup", {
            preserveScroll: true, // Preserve scroll stops scroll to top of homepage
            onSuccess: () => {
                setAlertMessage("Thanks for joining our email list!");
                setSeverity("success");
                reset();
            },
            onError: () => {
                if (errors.email) {
                    setAlertMessage(errors.email);
                    setSeverity("error");
                }
            },
        });
    };

    return (
        <EmailStyle>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <input type="submit" value="Subscribe" />
            </form>
            <div className="form__alert">
                {alertMessage && (
                    <AlertComponent
                        variant="outlined"
                        severity={severity}
                        closeHandler={handleAlertClose}
                    >
                        {alertMessage}
                    </AlertComponent>
                )}
            </div>
        </EmailStyle>
    );
};

export default EmailSignUpComponent;
