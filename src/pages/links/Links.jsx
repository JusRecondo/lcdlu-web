import CommonContentSection from '../../components/common/CommonContentSection';
import data from '../../assets/data.json';
import lacaradelosultimos from './lacaradelosultimos.webp';

const Links = () => {
    return (
        <CommonContentSection
            title="Links"
            id="links"
        >
            <div className="links-container">
                <div className="text">
                    <h3>En redes y Plataformas</h3>
                    <ul className="rrss">
                        {data.links?.socialAndPlatforms.map((item, i) => (
                            <li
                                key={i}
                                className="rrss-item"
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h3>En los medios</h3>
                    <ul className="press">
                        {data.links?.press.map((item, i) => (
                            <li
                                key={i}
                                className="press-item"
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <img
                    src={lacaradelosultimos}
                    role="presentation"
                    loading="lazy"
                    className="links-img"
                />
            </div>
        </CommonContentSection>
    );
};

export default Links;
