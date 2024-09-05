import { Helmet } from 'react-helmet';
const MetaTags = () => {
    return (
        <Helmet>
            <title>La Cara de los Últimos</title>
            {/*< link
                rel="icon"
                sizes="192x192"
                href=""
            /> */}
            <meta
                name="apple-mobile-web-app-capable"
                content="yes"
            />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta
                name="apple-mobile-web-app-title"
                content="La Cara de los Últimos"
            />
            {/*<!-- Tile icon for Win8 (144x144 + tile color) -->*/}
            <meta
                name="msapplication-TileImage"
                content=""
            />
            <meta
                name="msapplication-TileColor"
                content="#151515"
            />
        </Helmet>
    );
};

export default MetaTags;
