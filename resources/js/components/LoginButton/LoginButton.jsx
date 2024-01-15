import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { PiSignInBold } from "react-icons/pi";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            {children} <PiSignInBold style={{ fontSize: "22px" }} />
        </LoginButtonStyles>
    );
};

export default LoginButton;
