import {
  EMPLOYEES_ERROR,
  GET_EMPLOYEES,
  FILTER_EMPLOYEES,
  CLEAR_FILTER,
  SET_CURRENT,
} from "./types";
import axios from "axios";

export const getEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/operations/Employees", {
      headers: {
        Authorization: "Token 94106f053f005f73b9204f9ab1b208ae8a46bed1",
      },
    });

    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEES_ERROR,
      payload: error,
    });
  }
};

export const filterContacts = (text) => {
  return {
    type: FILTER_EMPLOYEES,
    payload: text,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

export const setCurrent = (currentEmployee) => {
  return {
    type: SET_CURRENT,
    payload: currentEmployee,
  };
};
