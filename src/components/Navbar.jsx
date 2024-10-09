import { NavLink } from 'react-router-dom';
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
                    <NavLink
                        to="/"
                        aria-label="Ir al inicio"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <FiHome />
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink
                    to="/bio"
                    aria-label="Ir a la sección Bio"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <FiInfo />
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/musica"
                    aria-label="Ir a la sección Música"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <FiMusic />
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/videos"
                    aria-label="Ir a la sección Videos"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <FiFilm />
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/links"
                    aria-label="Ir a la sección Links"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <FiLink />
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
