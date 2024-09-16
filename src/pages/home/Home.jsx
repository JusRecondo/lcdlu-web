/* import BandName from './BandName'; */
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { DESKTOP_SIZE } from '../../lib/constants';
import lacaradelosultimos from './lacaradelosultimos.jpg';
import lacaradelosultimosnombre from './lacaradelosultimosnombre.png';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

const Home = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width <= DESKTOP_SIZE;

    useEffect(() => {
        if (width >= DESKTOP_SIZE) {
            setShowAnnouncement(true);
        } else {
            setShowAnnouncement(false);
        }
    }, [width]);

    const handleShowAnnouncement = () => {
        setShowAnnouncement((prevState) => !prevState);
    };

    return (
        <section id="home">
            <img
                src={lacaradelosultimosnombre}
                alt="La cara de los últimos"
                loading="lazy"
                className="homebgnombre"
            />
            <img
                src={lacaradelosultimos}
                role="presentation"
                loading="lazy"
                className="homebg"
            />
            {isMobile && (
                <button
                    onClick={handleShowAnnouncement}
                    aria-label="Mostrar información sobre próxima fecha"
                    className="fab-btn"
                >
                    <FiCalendar className="fab-icon" />
                </button>
            )}
            {showAnnouncement && (
                <article className="announcement">
                    <h2>Próxima fecha</h2>
                    <p>21 de Septiembre en Haedo</p>
                    <p className="more-info">
                        Mas info en <FiArrowRight />
                        <a
                            href="https://www.instagram.com/after.indie/"
                            target="_blank"
                        >
                            @after.indie
                        </a>
                    </p>
                </article>
            )}
        </section>
    );
};

export default Home;
