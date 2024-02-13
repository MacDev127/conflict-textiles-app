import React from "react";
import { EmailStyle } from "./EmailSignUpComponent.styled";

const EmailSignUpComponent = () => {
    return (
        <EmailStyle>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="submit" value="Subscribe" />
            </form>
        </EmailStyle>
    );
};

export default EmailSignUpComponent;
