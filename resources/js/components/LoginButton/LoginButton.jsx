import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaUser } from "react-icons/fa6";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            {children} <FaUser style={{ fontSize: "20px", color: "#313131" }} />
        </LoginButtonStyles>
    );
};

export default LoginButton;
