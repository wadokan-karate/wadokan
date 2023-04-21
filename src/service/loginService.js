import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://localhost:7286',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

});

export const loginService = async(data) => {
  //console.log('hola', data);
 let response= await apiClient.post("/User/Login", data);
 let dataResponse= await response.data
 //console.log("desde el servicio", dataResponse)
 return dataResponse;
};