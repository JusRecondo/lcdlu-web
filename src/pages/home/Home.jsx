import homebg from './homebg.jpg';
const Home = () => {
    return (
        <section id="home">
            <img
                src={homebg}
                role="presentation"
                loading="lazy"
                className="homebg"
            />
        </section>
    );
};

export default Home;
