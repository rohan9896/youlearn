import axios from "axios";
import toast from "react-hot-toast";
import { base_url } from "../constants";

export const getGenres = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${base_url}/common/genres`,
    });
    return response.data.data;
  } catch (error) {
    toast.error(error.message);
  }
};
