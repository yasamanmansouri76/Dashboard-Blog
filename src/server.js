import axios from "axios";

export default axios.create({
  baseURL: `https://api.realworld.io/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});
