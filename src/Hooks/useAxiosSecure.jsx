import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://lucky-auto-shope-backend-side.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
