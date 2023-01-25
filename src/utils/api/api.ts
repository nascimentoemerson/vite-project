import axios from "axios";
import { LoginRequest } from "../types/requests";

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  });


export const api = {
    login: async ({email, password} :LoginRequest) => {
        try {
            const response = await axios.post('/Authorization/login', {email, password})
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (err) {
            alert(err)
        }
    }
}