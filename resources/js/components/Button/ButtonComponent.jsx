import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles } from "./ButtonComponent.styled";

const ButtonComponent = ({ className, children, ...props }) => {
    return (
        <ButtonStyles className={className} {...props}>
            {children}
        </ButtonStyles>
    );
};

export default ButtonComponent;

ButtonComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
