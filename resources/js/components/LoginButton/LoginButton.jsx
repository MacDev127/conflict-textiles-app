import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaRegUser } from "react-icons/fa6";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            <FaRegUser
                style={{ fontSize: "22px", color: "#3a3335" }}
                data-testid="user-icon"
            />
            {children}
        </LoginButtonStyles>
    );
};

export default LoginButton;
