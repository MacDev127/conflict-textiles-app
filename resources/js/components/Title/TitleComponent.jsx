import PropTypes from 'prop-types';
import { TitleStyle } from './TitleComponent.styled';

const TitleComponent = ({ className, children, ...props }) => {
  return (
    <TitleStyle className={className} {...props}>
      {children}
    </TitleStyle>
  );
};

export default TitleComponent;

TitleComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
