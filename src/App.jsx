import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Bio from './pages/Bio';
import Links from './pages/Links';
import Music from './pages/Music';
import NotFound404 from './pages/NotFound404';
import Layout from './components/Layout';

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            {loading ? (
                <p>...loading</p>
            ) : (
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
                            path="/links"
                            element={<Links />}
                        />
                        <Route
                            path="/music"
                            element={<Music />}
                        />
                        <Route
                            path="*"
                            element={<NotFound404 />}
                        />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
