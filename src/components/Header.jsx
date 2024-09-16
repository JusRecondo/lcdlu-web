import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import useWindowSize from '../hooks/useWindowSize';
import { TABLET_SIZE } from '../lib/constants';

const Header = () => {
    const { width } = useWindowSize();
    const srOnlyTitle = width >= TABLET_SIZE;

    return (
        <header className="common-header">
            <div className="inner-container">
                {srOnlyTitle ? (
                    <h1 className="sr-only">La cara de los últimos</h1>
                ) : (
                    <Link
                        to="/"
                        aria-label="Ir al inicio"
                    >
                        <h1>La cara de los últimos</h1>
                    </Link>
                )}
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
