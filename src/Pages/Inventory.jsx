import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { PiEngineFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { GiGearStick } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Inventory = () => {
  const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cars");
      return res.data;
    },
  });

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-14">
      {data.map((d) => {
        return (
          <div key={d._id}>
            <div className="card lg:card-side bg-base-200 my-10 shadow-xl">
              <figure>
                <img className="w-96" src={d.Image_cover} alt="car image" />
              </figure>
              <div className="card-body">
                <h1 className="text-2xl font-Roboto font-bold">
                  {d.year + " " + d.model + " " + d.make}
                </h1>
                <div className="md:flex justify-between items-baseline">
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-lg font-Roboto font-medium">
                          Price
                        </h1>
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
                      <p className="font-Roboto text-center">
                        {d.transmission}
                      </p>

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
                <Link to={`/carDetail/${d._id}`}>
                  <button className="btn btn-outline w-full">
                    Check Details
                  </button>
                </Link>
                <div className="w-72 ms-auto">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Inventory;
