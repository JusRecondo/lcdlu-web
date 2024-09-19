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
                    <h3>Redes y Plataformas</h3>
                    <ul>
                        {data.links?.socialAndPlatforms.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h3>Prensa</h3>
                    <ul>
                        {data.links?.press.map((item, i) => (
                            <li key={i}>
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
