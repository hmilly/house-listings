import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigate } from "react-router-dom";

const ListingSlider = ({ listings }) => {
  return (
    <>
      <p className="exploreHeading">Recommended</p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {listings.map(({ data, id }) => (
          <SwiperSlide
            key={id}
            onClick={() => Navigate(`/category/${data.type}/${id}`)}
          >
            <div className="swiperSlideDiv">
              <p className="swiperSlideText">{data.name}</p>
              <p className="swiperSlidePrice">
                {data.discountedPrice ?? data.regularPrice}{" "}
                {data.type === "rent" && "/ month"}
              </p>

              <img
                className="swiperSlideImg"
                src={data.imgUrls[0]}
                alt={`House image ${id}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListingSlider;
