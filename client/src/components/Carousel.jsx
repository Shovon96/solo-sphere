// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Slider Images
import sliderImage1 from "../assets/Images/carousel1.jpg"
import sliderImage2 from "../assets/Images/carousel2.jpg"
import sliderImage3 from "../assets/Images/carousel3.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='container px-6 my-12 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={sliderImage1}
                        text="Slide text 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={sliderImage2} text="Slide text 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={sliderImage3} text="Slide text 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
