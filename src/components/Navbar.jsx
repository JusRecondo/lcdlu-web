import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/bio">B</Link>
            </li>
            <li>
                <Link to="/musica">M</Link>
            </li>
            <li>
                <Link to="/videos">V</Link>
            </li>
            <li>
                <Link to="/links">L</Link>
            </li>
        </ul>
    );
};

export default Navbar;
