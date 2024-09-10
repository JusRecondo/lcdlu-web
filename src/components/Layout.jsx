import { Outlet } from 'react-router-dom';
import Header from './Header';
import MetaTags from './MetaTags';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <MetaTags />
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
