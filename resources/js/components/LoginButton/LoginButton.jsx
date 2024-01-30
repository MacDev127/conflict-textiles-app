import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaUser } from "react-icons/fa6";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            {children} <FaUser style={{ fontSize: "20px" }} />
        </LoginButtonStyles>
    );
};

export default LoginButton;
