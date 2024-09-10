import data from '../assets/data.json';
import CommonContentSection from '../components/common/CommonContentSection';

const Bio = () => {
    return (
        <CommonContentSection title="Bio">
            {data.bio?.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </CommonContentSection>
    );
};

export default Bio;
