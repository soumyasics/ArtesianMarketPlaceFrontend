import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: '', 

//local api 

  baseURL: 'http://localhost:4004/atresian_marketplace', 

  headers: {
    'Content-Type': 'application/json',
  },
});
 
export default axiosInstance