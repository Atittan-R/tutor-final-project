import axios from "axios";

export default axios.create({
    // baseURL: "http://10.0.2.2:3986/api",
    // baseURL: "http://it1.sut.ac.th:9001/api",
    baseURL: "http://192.168.1.85:3986/api",
    // baseURL: "http://192.168.43.217:3986/api",
    // baseURL: "http://192.168.43.150:3986/api",
    responseType: "json"
})
