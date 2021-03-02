import axios from "axios";

const fetchAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

fetchAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.message.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log("Refreshing tokens");

      return fetchAuth
        .post("/users/refreshToken")
        .then((res) => {
          if (res.status === 200) {
            console.log("Token refreshed");
            return fetchAuth(originalRequest);
          }
        })
        .catch(() => {
          window.location.replace("/login");
        });
    }
  }
);

export default fetchAuth;
