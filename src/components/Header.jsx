import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="common-header">
            <div className="inner-container">
                <Link
                    to="/"
                    aria-label="Ir al inicio"
                >
                    LOGO
                </Link>
            </div>
        </header>
    );
};

export default Header;
