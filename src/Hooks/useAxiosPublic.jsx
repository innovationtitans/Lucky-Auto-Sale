import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://lucky-auto-shope-backend-side.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
