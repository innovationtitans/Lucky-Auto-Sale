import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const FeatureCar = () => {
  const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cars");
      return res.data;
    },
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-7">
        <h1 className="text-4xl text-center mb-7">Choose your next car</h1>
        <Slider {...settings}>
          {data.map((car, index) => {
            return (
              <>
                <div
                  className="card w-72 lg:w-96 mx-auto h-full md:h-96 bg-base-100 shadow-xl my-10 image-full"
                  key={index}
                >
                  <figure>
                    <img src={car.Image_cover} className="" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {car.year} {car.model} {car.make}
                    </h2>
                    <div className="flex">
                      <p className="font-Roboto">
                        <span className="font-bold">Price:</span> ${car.price}
                      </p>
                      <p className="font-Roboto">
                        <span className="font-bold">Milage:</span> {car.milage}
                      </p>
                    </div>

                    <p></p>

                    <div className="card-actions justify-end mt-4">
                      <Link to={`/carDetail/${car._id}`}>
                        <button className="btn">Check Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>

        {/* <div className="text-center pt-8">
          <Link to="/inventory">
            <button className=" btn btn-outline btn-lg">All Listings</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default FeatureCar;
