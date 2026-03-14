import axios from "./axios.customize"
export const loginApi = (username:string, password:string) =>{


    const urlBackend = "/api/v1/auth/login"
    return axios.post<any,IBackendRes<ILogin>>(urlBackend,{username,password})

}