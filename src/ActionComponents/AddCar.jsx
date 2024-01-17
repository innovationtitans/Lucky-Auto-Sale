import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddCar = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_API;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFiles = data.interirorImg;
    console.log(imageFiles);
    const testArr = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      const test = { image: imageFile };
      console.log(test);

      const res = await axiosPublic.post(image_hosting_api, test, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data.data.display_url);
      testArr.push(res.data.data.display_url);
    }

    console.log(testArr);
  };

  return (
    <>
      <h1 className="text-center my-10 text-3xl font-Roboto">
        Enter Car information.
      </h1>
      <div className="hero min-h-fit max-w-7xl mx-auto">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <input
                type="text"
                placeholder="Year"
                className="input input-bordered"
                required
                {...register("year")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Make</span>
              </label>
              <input
                type="text"
                placeholder="Make"
                className="input input-bordered"
                required
                {...register("make")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Model</span>
              </label>
              <input
                type="text"
                placeholder="Model"
                className="input input-bordered"
                required
                {...register("model")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Drivertrain</span>
              </label>
              <input
                type="text"
                placeholder="Drivertrain"
                className="input input-bordered"
                required
                {...register("drivertrain")}
              />
            </div>

            <div className=" block lg:flex  justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Vechile Type</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("vechileType")}
                  defaultValue={""}
                >
                  <option disabled selected>
                    Select from the options
                  </option>
                  <option>SUV</option>
                  <option>CAR</option>
                  <option>Truck</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Transmission</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("transmission")}
                  defaultValue={""}
                >
                  <option disabled selected>
                    Select from the options
                  </option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("condition")}
                  defaultValue={""}
                >
                  <option disabled selected>
                    Select from the options
                  </option>
                  <option>New</option>
                  <option>Used</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fuel</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("fuel")}
                  defaultValue={""}
                >
                  <option disabled selected>
                    Select from the options
                  </option>
                  <option>Gasoline</option>
                  <option>Diesel</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Engine</span>
              </label>
              <input
                type="text"
                placeholder="Engine"
                className="input input-bordered"
                required
                {...register("engine")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">VIN</span>
              </label>
              <input
                type="text"
                placeholder="VIN Number"
                className="input input-bordered"
                required
                {...register("vin")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Fuel Economy City</span>
              </label>
              <input
                type="text"
                placeholder="Fuel Economy HWY"
                className="input input-bordered"
                required
                {...register("cityFuel")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Fuel Economy HWY</span>
              </label>
              <input
                type="text"
                placeholder="Fuel Economy HWY"
                className="input input-bordered"
                required
                {...register("HWYFuel")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
                {...register("price")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description. Optional</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered textarea-lg w-full max-w-full"
                {...register("description")}
              ></textarea>
            </div>

            <div className="md:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Cover Image.<br></br>This image will show up in front page
                  </span>
                </label>

                <input
                  type="file"
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                  {...register("coverImg")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Upload car interior and exterior images here. <br></br>You
                    can choose multple files.
                  </span>
                </label>

                <input
                  type="file"
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                  multiple
                  {...register("interirorImg")}
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline"
                type="submit"
                value="Add to the Database"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCar;
