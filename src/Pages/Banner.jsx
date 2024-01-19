import { Link } from "react-router-dom";
// import banner from "../assets/slide_01.jpg";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const Banner = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_API;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosSecure = useAxiosSecure();

  const [bannerImage, setBannerImage] = useState("");

  const { data = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner");

      return res.data;
    },
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setBannerImage(data[0].banImg);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bannerImage = data.bannerImg[0];
    const bannerImageFile = { image: bannerImage };

    try {
      const res = await axiosSecure.post(image_hosting_api, bannerImageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const banImg = res.data.data.display_url;
        const date = new Date().toLocaleString();
        const banner = { banImg, date };
        axiosSecure.post("/banner", banner).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: true,
              timer: 1500,
            });
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "right top",
        backgroundPositionX: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-Roboto">
            Welcome <br></br>To<br></br>
            <span className="font-Dancing">.....Lucky Auto Sales.....</span>
          </h1>
          <Link to="/inventory">
            <button className="btn btn-outline text-white mt-10">
              View Our Inventory
            </button>
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-10">
              <p className="text-2xl">Upload a new Banner</p>
              <input
                type="file"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                {...register("bannerImg")}
              />
            </div>
            <input type="submit" className="btn btn-warning" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
