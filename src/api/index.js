import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66458542b8925626f8921939.mockapi.io/api/v1",
});

export default mainUrl;
