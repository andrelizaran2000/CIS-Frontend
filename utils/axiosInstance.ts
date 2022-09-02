// Modules
import axios from 'axios';

const URL = 'https://api-cis-backend.herokuapp.com/';

export const axiosInstance = axios.create({ baseURL:URL });