/**
 * A reusable section component for organizing and displaying content.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The content to be rendered within the section.
 * @param {string} [props.customClassName] - Additional custom class name to be applied to the section.
 * @param {string} [props.id] - The HTML id attribute for the section.
 * @param {string} [props.info] - Additional information or description for the section.
 * @param {string} [props.title] - The title of the section.
 * @returns {JSX.Element} - The rendered content section.
 */

const CommonContentSection = ({
    children,
    customClassName,
    id,
    info,
    title,
}) => {
    return (
        <section
            className={`common-content-section${customClassName ? ' ' + customClassName : ''}`}
            id={id || null}
        >
            <div className="common-inner-container">
                {title && <h2 className="common-content-title">{title}</h2>}
                {info && <p className="common-content-info">{info}</p>}
                {children}
            </div>
        </section>
    );
};

export default CommonContentSection;
