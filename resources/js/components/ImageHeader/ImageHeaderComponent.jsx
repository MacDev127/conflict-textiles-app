import React from "react";
import { ImageHeaderStyle } from "./ImageHeaderComponent.styled";
import "animate.css";

const ImageHeaderComponent = ({
    children,
    className,
    imageUrl,
    quoteText,
    ...props
}) => {
    return (
        <ImageHeaderStyle className={className} {...props}>
            <img src={imageUrl} alt="" />
            <div className="imageHeader__overlay"></div>
            <q className="imageHeader__text animate__animated animate__fadeIn">
                {quoteText}
            </q>
        </ImageHeaderStyle>
    );
};

export default ImageHeaderComponent;
