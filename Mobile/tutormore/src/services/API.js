import axios from "axios";

export default axios.create({
    // baseURL: "http://it1.sut.ac.th:9001/api",
    // baseURL: "http://10.0.2.2:3986/api",
    baseURL: "http:// 10.0.14.163:3986/api",
    responseType: "json"
})