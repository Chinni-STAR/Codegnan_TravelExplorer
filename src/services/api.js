import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-backend-cik8.onrender.com"
});

export default api;
