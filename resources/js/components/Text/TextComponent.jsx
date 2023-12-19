import PropTypes from 'prop-types';
import { TextStyle } from './TextComponent.styles';

const TextComponent = ({ className, children, ...props }) => {
  return (
    <TextStyle className={className} {...props}>
      {children}
    </TextStyle>
  );
};

export default TextComponent;

TextComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
