import { useNavigate } from 'react-router-dom';
import CommonButton from '../components/common/CommonButton';
import CommonContentSection from '../components/common/CommonContentSection';

const NotFound404 = () => {
    const navigate = useNavigate();
    return (
        <CommonContentSection id="not-found">
            <>
                <h1>Ups! No hay nada por aquí</h1>
                <CommonButton handleClick={() => navigate('/')}>
                    Volver al inicio
                </CommonButton>
            </>
        </CommonContentSection>
    );
};

export default NotFound404;
