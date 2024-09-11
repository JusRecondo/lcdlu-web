import CommonContentSection from '../components/common/CommonContentSection';
import data from '../assets/data.json';
import Slider from 'react-slick';

const Music = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
    };
    return (
        <CommonContentSection
            title="Musica"
            id="music"
        >
            <Slider {...sliderSettings}>
                {data.music?.map((item, i) => (
                    <div key={i}>
                        <div className="slider-item-inner-container">
                            <div>
                                <h3>
                                    {item.name} - {item.year} ({item.type})
                                </h3>
                                <iframe
                                    src={item.embed}
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div>
                                <p>{item.summary}</p>
                                {item.video && (
                                    <a
                                        href={item.video.link}
                                        target="_blank"
                                    >
                                        {item.video.text}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </CommonContentSection>
    );
};

export default Music;
