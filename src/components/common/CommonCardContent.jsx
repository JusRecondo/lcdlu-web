/**
 * A reusable component for rendering content within a card.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The content to be rendered within the card.
 * @param {string} [props.customClassName] - Additional custom class name to be applied to the card content.
 * @param {{'small' | 'medium' | 'large'}} [props.size] - Card max-width, see _card.scss file for details.
 * @returns {JSX.Element} - The rendered card content.
 *
 */

const CommonCardContent = ({ children, customClassName, size }) => {
    return (
        <article
            className={`common-card-content ${size ? size : ''} ${customClassName ? customClassName : ''}`}
        >
            {children}
        </article>
    );
};

export default CommonCardContent;
