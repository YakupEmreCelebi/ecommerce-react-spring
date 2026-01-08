import axios from "axios";

const apiClient = axios.create({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
});