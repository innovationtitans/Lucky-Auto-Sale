import axios from "axios";

const axiosPublic = axios.create({
  baseUrl: "Data.json",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
