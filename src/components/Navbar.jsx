import { Link } from 'react-router-dom';
import { FiInfo, FiMusic, FiFilm, FiLink } from 'react-icons/fi';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link
                    to="/bio"
                    aria-label="Bio"
                >
                    <FiInfo />
                </Link>
            </li>
            <li>
                <Link
                    to="/musica"
                    aria-label="Música"
                >
                    <FiMusic />
                </Link>
            </li>
            <li>
                <Link
                    to="/videos"
                    aria-label="Videos"
                >
                    <FiFilm />
                </Link>
            </li>
            <li>
                <Link
                    to="/links"
                    aria-label="Links"
                >
                    <FiLink />
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
