import PropTypes from "prop-types";
import { SubtitleStyle } from "./SubtitleComponent.styles";

const SubtitleComponent = ({ children, ...props }) => {
    return <SubtitleStyle {...props}>{children}</SubtitleStyle>;
};

export default SubtitleComponent;

SubtitleComponent.propTypes = {
    children: PropTypes.node,
};
