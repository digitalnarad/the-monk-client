import { createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

const initialState = {
  // Auth state
  authData: null,
  authToken: localStorage.getItem("token") || null,

  // Error state
  errorData: {
    show: false,
    message: "",
    type: "",
  },
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAuthData(state, action) {
      state.authData = action.payload;
    },
    setErrorData(state, action) {
      state.errorData = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const handelCatch = (error) => async (dispatch) => {
  let status = error?.response?.status;
  let message =
    error?.response?.data?.message ||
    error?.message ||
    error?.response?.data?.error ||
    "Something went wrong!";
  let returnCatch = {
    status: status,
    message: message,
  };
  if (status === 401) {
    dispatch(throwError("Session is expired"));
    dispatch(setAuthData(null));
    localStorage.removeItem("authData");
  } else {
    dispatch(
      setErrorData({
        show: true,
        message: message,
        type: "error",
      })
    );
  }
  return returnCatch;
};

export const showSuccess = (message) => async (dispatch) => {
  dispatch(
    setErrorData({
      show: true,
      message: message,
      type: "success",
    })
  );
};

export const throwError = (message) => async (dispatch) => {
  let newMessage = message;
  newMessage = message || "Something went wrong!";
  dispatch(
    setErrorData({
      show: true,
      message: newMessage,
      type: "error",
    })
  );
};

export const logout = () => async (dispatch) => {
  dispatch(setAuthToken(null));
  dispatch(setAuthData(null));
  localStorage.removeItem("token");
};

export const verifyToken = (token) => async (dispatch) => {
  try {
    if (!token) return;
    const res = await api.get("/user/token-verification");
    if (res.status === 200) {
      dispatch(setAuthToken(token));
      dispatch(setAuthData(res?.data?.response));
      return;
    }
    dispatch(throwError(res.data.message));
    dispatch(logout(null));
  } catch (error) {
    dispatch(handelCatch(error));
    dispatch(logout(null));
  }
};

export const { setAuthData, setErrorData, setAuthToken } = globalSlice.actions;

export default globalSlice.reducer;
