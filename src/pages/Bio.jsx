import CommonContentSection from '../components/common/CommonContentSection';
import data from '../assets/data.json';

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
