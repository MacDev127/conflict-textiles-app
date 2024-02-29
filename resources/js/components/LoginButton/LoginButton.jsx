import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaRegUser } from "react-icons/fa6";

const LoginButton = ({ children }) => {
    return (
        <LoginButtonStyles>
            <FaRegUser style={{ fontSize: "22px", color: "#df0144" }} />
            {children}
        </LoginButtonStyles>
    );
};

export default LoginButton;
