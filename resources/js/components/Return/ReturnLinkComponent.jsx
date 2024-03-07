import React from "react";
import { Link } from "@inertiajs/react";
import { ReturnLinkStyle } from "./ReturnLinkComponent.styled";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { colors } from "@mui/material";

const ReturnLinkComponent = () => {
    return (
        <ReturnLinkStyle>
            <FaLongArrowAltLeft
                style={{ fontSize: "22px", color: "#df0144" }}
            />

            <Link href="/collection">Back to collection</Link>
        </ReturnLinkStyle>
    );
};

export default ReturnLinkComponent;
