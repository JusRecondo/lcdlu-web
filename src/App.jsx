import { Routes, Route } from 'react-router-dom';
//Pages
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Bio from './pages/bio/Bio';
import Links from './pages/links/Links';
import Music from './pages/music/Music';
import Videos from './pages/videos/Videos';
import NotFound404 from './pages/NotFound404';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="/bio"
                        element={<Bio />}
                    />
                    <Route
                        path="/musica"
                        element={<Music />}
                    />
                    <Route
                        path="/videos"
                        element={<Videos />}
                    />
                    <Route
                        path="/links"
                        element={<Links />}
                    />
                    <Route
                        path="*"
                        element={<NotFound404 />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
