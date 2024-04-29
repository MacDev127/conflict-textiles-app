import React from "react";
import { LoginButtonStyles } from "./LoginButton.styled";
import { FaUser } from "react-icons/fa";

const LoginButton = ({ children, authUser }) => {
    return (
        <LoginButtonStyles>
            <FaUser
                style={{
                    fontSize: "22px",
                    color: authUser ? "#df0144" : "#3a3335",
                }}
                data-testid="user-icon"
            />

            {children}
        </LoginButtonStyles>
    );
};

export default LoginButton;
