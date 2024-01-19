import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdateCar = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_API;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [Error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const CarData = useLoaderData();
  console.log(CarData);

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFiles = data.interirorImg;
    // console.log(imageFiles);
    const allImages = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      setUploading(false);
      const test = { image: imageFile };
      setUploading(false);

      try {
        const res = await axiosPublic.post(image_hosting_api, test, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setUploading(false);

        if (res.data.success) {
          allImages.push(res.data.data.display_url);
          setUploading(false);
        } else {
          setError(
            "Issue uploading the interior images. Make sure to upload PNG, JPG, JPEG AND WEBP file only"
          );
          console.log(Error);
        }
      } catch (err) {
        console.log("Error is coming while uploading the bulk images", err);
        setError(
          err.message + " (Error is coming while uploading the bulk images)"
        );
        break;
      }
    }
    // console.log(allImages);

    const coverImage = data.coverImg[0];
    const coverImgFile = { image: coverImage };

    try {
      const res = await axiosPublic.post(image_hosting_api, coverImgFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploading(false);

      console.log(
        "From the image bb after uploading cover image",
        res.data.success
      );

      if (res.data.success) {
        const year = data.year;
        const make = data.make;
        const model = data.model;
        const drivertrain = data.drivertrain;
        const vechileType = data.vechileType;
        const transmission = data.transmission;
        const condition = data.condition;
        const fuel = data.fuel;
        const engine = data.engine;
        const vin = data.vin;
        const cityFuel = data.cityFuel;
        const HWYFuel = data.HWYFuel;
        const price = data.price;
        const date = new Date().toJSON().slice(0, 10);
        const Image_cover = res.data.data.display_url;
        const description = data.description;
        const milage = data.milage;

        const allData = {
          year,
          make,
          model,
          drivertrain,
          vechileType,
          transmission,
          condition,
          fuel,
          engine,
          vin,
          cityFuel,
          HWYFuel,
          price,
          date,
          Image_cover,
          allImages,
          description,
          milage,
        };
        // console.log(allData);

        axiosSecure.update("/addCar", allData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: true,
              timer: 1500,
            });
            setUploading(false);
            console.log("after submitting", uploading);
          }
        });
      }
    } catch (err) {
      console.log(
        "Error are coming from either the cover photo or sending the data to mongoDB database"
      );
      setError(
        err.message +
          " (Error are coming from either the cover photo uploading or sending the data to mongoDB database)"
      );
    }

    setUploading(true);
    console.log("last", uploading);
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
                defaultValue={CarData[0].year}
                className="input input-bordered"
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
                defaultValue={CarData[0].make}
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
                defaultValue={CarData[0].model}
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
                defaultValue={CarData[0].drivertrain}
                required
                {...register("drivertrain")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Milage</span>
              </label>
              <input
                type="text"
                placeholder="Milage"
                className="input input-bordered"
                defaultValue={CarData[0].milage}
                required
                {...register("milage")}
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
                  defaultValue="default"
                >
                  <option disabled value="default">
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
                  defaultValue="default"
                >
                  <option disabled value="default">
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
                  defaultValue="default"
                >
                  <option disabled value="default">
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
                  defaultValue="default"
                >
                  <option disabled value="default">
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
                defaultValue={CarData[0].engine}
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
                defaultValue={CarData[0].vin}
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
                defaultValue={CarData[0].cityFuel}
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
                defaultValue={CarData[0].HWYFuel}
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
                defaultValue={CarData[0].price}
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
                defaultValue={CarData[0].description}
                {...register("description")}
              ></textarea>
            </div>

            <div className="md:flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Cover Image.<br></br>This image will show up in front page.
                    (Only JPG and PNG)
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
                    can choose multple files. (Only JPG and PNG)
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
          {Error && (
            <p className="text-center py-4 text-white bg-red-600">{Error}</p>
          )}
          {uploading && (
            <span className="loading loading-bars loading-lg"></span>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateCar;
