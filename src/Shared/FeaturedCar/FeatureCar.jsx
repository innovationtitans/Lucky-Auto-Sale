import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper/modules";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

const FeatureCar = () => {
  const [setSwiperRef] = useState(null);

  const [cars, setCar] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto my-7">
        <h1 className="text-4xl text-center mb-7">View Our Cars</h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cars.map((car, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <img src={car.coverImg} alt="" />
                  <p>{car.name}</p>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default FeatureCar;
