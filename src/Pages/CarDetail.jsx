import { FaGasPump, FaPhoneAlt } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { TbSteeringWheel } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";

const CarDetail = () => {
  const dataLoader = useLoaderData();
  console.log("Data from ", dataLoader);

  const pictures = () => {
    return dataLoader.map((d, index) => (
      <div key={index} className="max-w-7xl mx-auto">
        <div className="lg:flex justify-around">
          <div className="test">
            <div className="carousel max-w-[600px]">
              {d?.allImages.map((image, i) => (
                <>
                  <div
                    key={i}
                    id={`slide${i}`}
                    className="carousel-item relative w-full"
                  >
                    <img src={image} className="w-full h-full" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href={`#slide${i - 1}`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide${i + 1}`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="test2">
            <div className="card-body">
              <h1 className="text-2xl font-Roboto font-bold">
                {d.year + " " + d.model + " " + d.make}
              </h1>
              <div className=" justify-between items-baseline">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-lg font-Roboto font-medium">Price</h1>
                      <p className="font-Roboto">${d.price}</p>
                    </div>
                    <div className="mx-10">
                      <h1 className="text-lg font-Roboto font-medium">
                        Milage
                      </h1>
                      <p className="font-Roboto">{d.milage}</p>
                    </div>
                  </div>
                </div>

                <div className="divider divider-warning"></div>

                <div className="flex justify-between gap-2">
                  <div>
                    <div className="flex items-center">
                      <PiEngineFill />
                      <h1 className="text-lg font-Roboto font-medium ml-2">
                        Engine
                      </h1>
                    </div>
                    <p className="font-Roboto text-center">{d.engine}</p>

                    <div className="flex items-center">
                      <TbSteeringWheel />
                      <h1 className="text-lg font-Roboto font-medium ml-2">
                        Drivertrain
                      </h1>
                    </div>

                    <p className="font-Roboto text-center">{d.drivertrain}</p>
                  </div>

                  <div className="mx-10">
                    <div className="flex items-center">
                      <GiGearStick />
                      <h1 className="text-lg font-Roboto font-medium ml-2">
                        Transmission
                      </h1>
                    </div>
                    <p className="font-Roboto text-center">{d.transmission}</p>

                    <div className="flex items-center">
                      <FaGasPump />
                      <h1 className=" font-Roboto font-medium ml-2">
                        Fuel Economy
                      </h1>
                    </div>
                    <p className="font-Roboto text-center">
                      {d.cityFuel} city / {d.HWYFuel} hwy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-justify my-10 font-Roboto leading-relaxed md:text-2xl px-2">
          {d.description}
        </p>

        <div className=" ms-auto bg-gray-400 p-4 text-white">
          <div className="flex text-right justify-between font-Roboto">
            <div className="flex items-center">
              <FaPhoneAlt />

              <a href="tel:586-666-7789">586-666-7789</a>
            </div>

            <div className="flex mx-10 items-center">
              <MdEmail className="font-bold" />
              <a href="mailto:test@gmail.com">Email us</a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return <>{pictures()}</>;
};

export default CarDetail;
