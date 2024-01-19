import { Link } from "react-router-dom";
import banner from "../assets/slide_01.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
