import axios from "axios";
import toast from "react-hot-toast";
import { base_url } from "../../constants";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupFailure,
  signupStart,
  signupSuccess,
} from "./AuthActions";

export const loginCall = async (credentials, dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`${base_url}/auth/login`, credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const signupCall = async (credentials, dispatch) => {
  dispatch(signupStart());
  try {
    const response = await axios.post(`${base_url}/auth/register`, credentials);
    dispatch(signupSuccess());
    toast.success("User Created Successfully!");
  } catch (error) {
    dispatch(signupFailure());
  }
};
