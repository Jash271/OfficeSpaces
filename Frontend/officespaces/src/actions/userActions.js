import {
  REGISTER_USER,
  USER_ERROR,
  LOGIN_USER,
  LOGOUT,
  GET_VIOLATIONS,
  DUMMY
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const loginUser = () => async (dispatch) => {
  const firstName = localStorage.getItem('First_Name');
  const lastName = localStorage.getItem('Last_Name');
  const token = localStorage.getItem('Token');
  setAuthToken(token)
  const data = { firstName, lastName };
  dispatch({
    type: LOGIN_USER,
    payload: data
  })
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getViolations = (month, year) =>
  async (dispatch) => {
    console.log(month, year);
    const token = localStorage.getItem('Token')

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
        },
      };
      const data = {
        month,
        year,
      };
      const res = await axios.post(
        "https://jash10.pythonanywhere.com/operations/violation-tracker",
        data,
        config,
      );
      console.log(res.data);
      dispatch({
        type: GET_VIOLATIONS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: error.response.statusText,
      });
    }
  };

export const dummy = () => {
  return {
    type: DUMMY
  }
}