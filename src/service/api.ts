import { ILogin, IRegister } from "./type"
import axios from "./axios.customize"
export const loginApi = (payload: any) => {
    const urlBackend = "/api/v1/auth/login"
    return axios.post<any, IBackendRes<ILogin>>(urlBackend, payload)

}


export const registerApi = (payload: any): Promise<IBackendRes<IRegister>> => {
    const urlBackend = "/api/v1/user/register"
    return axios.post<any, IBackendRes<IRegister>>(urlBackend, payload)

}



export const fetAccountApi = (): Promise<IBackendRes<IFetchAccount>> => {
    const urlBackend = "/api/v1/auth/account"
    return axios.get<any, IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 3000
        }
    })

}