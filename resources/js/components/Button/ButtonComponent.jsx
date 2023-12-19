import PropTypes from 'prop-types';
import { ButtonStyles } from './ButtonComponent.styled';
import { ArrowIcon } from '../styles/Icons.styled';

const ButtonComponent = ({ className, children, ...props }) => {
  return (
    <ButtonStyles className={className} {...props}>
      {children} <ArrowIcon />
    </ButtonStyles>
  );
};

export default ButtonComponent;

ButtonComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
