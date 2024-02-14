import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            <FaCircleUser style={{ fontSize: "20px", color: "#313131" }} />
            {children}
        </LoginButtonStyles>
    );
};

export default LoginButton;
