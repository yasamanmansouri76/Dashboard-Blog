import axios from "axios";
import token from "@/store/auth.js";

export default axios.create({
  baseURL: `https://api.realworld.io/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: token ? token.state.userToken : "",
  },
});
