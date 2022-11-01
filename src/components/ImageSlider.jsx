import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = ({ imgArr }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {imgArr.map((url, i) => (
        <SwiperSlide key={i}>
          <div className="swiperSlideDiv">
            <img
              className="swiperSlideImg"
              src={url}
              alt={`House ${i + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
