import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fortenergy.sysalpha.com/api'
});

export default api;