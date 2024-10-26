import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_PROXY}/api`,
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer " + localStorage.getItem("token"),
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("todo-fe-login-student's api Starting Request", request);
    return request;
  },
  function (error) {
    console.log("todo-fe-login-student's api REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("todo-fe-login-student's api Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("todo-fe-login-student's api RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api;
