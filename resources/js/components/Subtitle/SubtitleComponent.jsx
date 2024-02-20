import PropTypes from "prop-types";
import { SubtitleStyle } from "./SubtitleComponent.styles";

const SubtitleComponent = ({ children, className, ...props }) => {
    return (
        <SubtitleStyle className={className} {...props}>
            {children}
        </SubtitleStyle>
    );
};

export default SubtitleComponent;

SubtitleComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
