import axios from "axios";

const fetchAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default fetchAuth;
