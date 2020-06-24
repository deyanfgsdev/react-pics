import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pVcHxPwXICHhuFTfJgmLaRRsBuaXj2X9iaPfisLqOZ4",
  },
});
