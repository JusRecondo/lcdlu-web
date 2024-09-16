/* import BandName from './BandName'; */
import lacaradelosultimos from './lacaradelosultimos.jpg';
import lacaradelosultimosnombre from './lacaradelosultimosnombre.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
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
        </section>
    );
};

export default Home;
