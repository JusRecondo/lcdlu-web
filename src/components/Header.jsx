import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
    return (
        <header className="common-header">
            <div className="inner-container">
                <Link
                    to="/"
                    aria-label="Ir al inicio"
                >
                    <h1>La cara de los últimos</h1>
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
