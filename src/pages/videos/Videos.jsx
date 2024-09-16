import CommonContentSection from '../../components/common/CommonContentSection';
import data from '../../assets/data.json';
import Slider from 'react-slick';

const Videos = () => {
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
            title="Videos"
            id="videos"
        >
            <Slider {...sliderSettings}>
                {data.videos?.map((item, i) => (
                    <div key={i}>
                        <div className="slider-item-inner-container">
                            <div>
                                <h3>
                                    {item.name} - {item.year} ({item.type})
                                </h3>
                                <div className="video-wrapper">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={item.embed}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div>
                                <p>{item.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </CommonContentSection>
    );
};

export default Videos;
