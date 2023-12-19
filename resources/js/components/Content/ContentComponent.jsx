import PropTypes from 'prop-types';
import { ContentStyle } from './ContentComponent.styled';

const ContentComponent = ({ className, children, ...props }) => {
  return (
    <ContentStyle className={className} {...props}>
      {children}
    </ContentStyle>
  );
};

export default ContentComponent;

ContentComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
