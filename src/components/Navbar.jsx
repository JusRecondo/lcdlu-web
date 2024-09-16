import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { TABLET_SIZE } from '../lib/constants';
import { FiInfo, FiMusic, FiFilm, FiLink, FiHome } from 'react-icons/fi';

const Navbar = () => {
    const { width } = useWindowSize();
    const showHomeItem = width >= TABLET_SIZE;
    return (
        <ul className="navbar">
            {showHomeItem && (
                <li>
                    <Link
                        to="/"
                        aria-label="Ir al inicio"
                    >
                        <FiHome />
                    </Link>
                </li>
            )}
            <li>
                <Link
                    to="/bio"
                    aria-label="Ir a la sección Bio"
                >
                    <FiInfo />
                </Link>
            </li>
            <li>
                <Link
                    to="/musica"
                    aria-label="Ir a la sección Música"
                >
                    <FiMusic />
                </Link>
            </li>
            <li>
                <Link
                    to="/videos"
                    aria-label="Ir a la sección Videos"
                >
                    <FiFilm />
                </Link>
            </li>
            <li>
                <Link
                    to="/links"
                    aria-label="Ir a la sección Links"
                >
                    <FiLink />
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
