import { Navigation,Pagination , Scrollbar, A11y} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import slide1 from '../img/slide1.webp'
import slide2 from '../img/slide2.webp'
import slide3 from '../img/slide3.webp'

const SlideA= ()=>{
    return(
        <Swiper
            modules={[Navigation,Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <img src={slide1} alt="" />
                
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        </Swiper>
    )

}
export default SlideA