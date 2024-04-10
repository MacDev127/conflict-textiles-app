import PropTypes from "prop-types";
import ReactDom from "react-dom";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";
import "./ModalComponent.css";

const CloseIcon = styled(FaXmark)`
    font-size: 20px;
    color: white;
    &:hover {
        color: #f7eaeacc;
    }
`;

const ModalComponent = ({ children, open, onClose }) => {
    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="modal__overlay" />
            <div className="modal">
                <div className="modal__icon">
                    <CloseIcon onClick={onClose} />
                </div>

                <div>{children}</div>
            </div>
        </>,
        document.getElementById("portal")
    );
};

export default ModalComponent;

ModalComponent.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func,
};
