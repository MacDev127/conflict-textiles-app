import PropTypes from 'prop-types';
import { ContainerStyle } from './ContainerComponent.styled';

const ContainerComponent = ({ className, children, ...props }) => {
  return (
    <ContainerStyle className={className} {...props}>
      {children}
    </ContainerStyle>
  );
};

export default ContainerComponent;

ContainerComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
