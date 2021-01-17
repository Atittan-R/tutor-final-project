import axios from "axios";

export default axios.create({
    // baseURL: "http://10.0.2.2:3986/api",
    baseURL: "http://192.168.43.150:3986/api",
    responseType: "json"
})