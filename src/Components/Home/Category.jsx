import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./category.css";
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle";

import slide1 from "/src/assets/home/slide1.jpg";
import slide2 from "/src/assets/home/slide2.jpg";
import slide3 from "/src/assets/home/slide3.jpg";
import slide4 from "/src/assets/home/slide4.jpg";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper max-w-4xl"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h4 className="uppercase text-2xl absolute bottom-6 text-white shadow-xl">
            salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h4 className="uppercase text-2xl absolute bottom-6 text-white shadow-xl">
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h4 className="uppercase text-2xl absolute bottom-6 text-white shadow-xl">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h4 className="uppercase text-2xl absolute bottom-6 text-white shadow-xl">
            desserts
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
