/**
 * CommonButton component renders a customizable button.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {function} props.handleClick - The function to be called when the button is clicked.
 * @param {string} [props.ariaLabel] - The accessible label for the button.
 * @param {('primary' | 'secondary' | 'outlined' | 'link')} [props.variant] - The variant of the button: 'primary' is default.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {string} [props.customClassName] - Additional custom CSS class for the button.
 *
 * @returns {JSX.Element} The rendered button component.
 */

const CommonButton = ({
    children,
    handleClick,
    ariaLabel,
    variant,
    disabled,
    customClassName,
}) => {
    const buttonClassName = `common-button ${variant ? variant : 'primary'} ${customClassName ? customClassName : ''}`;
    return (
        <button
            className={buttonClassName}
            onClick={handleClick}
            aria-label={ariaLabel ? ariaLabel : null}
            disabled={Boolean(disabled)}
        >
            {children}
        </button>
    );
};

export default CommonButton;
