import CommonContentSection from '../components/common/CommonContentSection';
import data from '../assets/data.json';

const Links = () => {
    return (
        <CommonContentSection
            title="Links"
            id="links"
        >
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
        </CommonContentSection>
    );
};

export default Links;
