import { Outlet } from 'react-router-dom';
import Header from './Header';
import MetaTags from './MetaTags';

const Layout = () => {
    return (
        <>
            <MetaTags />
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
