/**
 * A reusable header section component for displaying a title, subtitle, and additional content.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} [props.children] - Additional content to be rendered within the header section.
 * @param {string} [props.customClassName] - Additional custom class name to be applied to the header section.
 * @param {string} [props.id] - The HTML id attribute for the header section.
 * @param {string} [props.subtitle] - The subtitle or secondary information to be displayed.
 * @param {string} props.title - The main title of the header section.
 * @param {boolean} [props.backButton] - If true, renders a "back button". Defaults to false.
 * @returns {JSX.Element} - The rendered header section.
 */

import CommonBackButton from './CommonBackButton';

const CommonHeaderSection = ({
    children,
    customClassName,
    id,
    subtitle,
    title,
    backButton = false,
}) => {
    return (
        <section
            className={`common-header-section${customClassName ? ' ' + customClassName : ''}`}
            id={id || null}
        >
            {backButton && <CommonBackButton />}
            <div className="common-inner-container">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
                {children}
            </div>
        </section>
    );
};

export default CommonHeaderSection;
