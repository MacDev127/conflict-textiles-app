import React from "react";
import { Link } from "@inertiajs/react";
import { ReturnLinkStyle } from "./ReturnLinkComponent.styled";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ReturnLinkComponent = ({ to, children }) => {
    return (
        <ReturnLinkStyle>
            <FaLongArrowAltLeft
                style={{ fontSize: "22px", color: "#df0144" }}
            />

            <Link href={to}>{children}</Link>
        </ReturnLinkStyle>
    );
};

export default ReturnLinkComponent;
