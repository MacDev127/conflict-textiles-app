import { PageTitleStyle } from "./PageTitleComponent.styled";

const PageTitleComponent = ({ className, children, ...props }) => {
    return (
        <PageTitleStyle className={className} {...props}>
            {children}
        </PageTitleStyle>
    );
};

export default PageTitleComponent;
