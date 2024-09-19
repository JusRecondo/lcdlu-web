import CommonContentSection from '../../components/common/CommonContentSection';
import data from '../../assets/data.json';
import lacaradelosultimos from './lacaradelosultimos.webp';

const Bio = () => {
    return (
        <CommonContentSection
            title="Bio"
            id="bio"
        >
            <div className="bio-container">
                <div className="text">
                    {data.bio?.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <img
                    src={lacaradelosultimos}
                    role="presentation"
                    loading="lazy"
                    className="bio-img"
                />
            </div>
        </CommonContentSection>
    );
};

export default Bio;
