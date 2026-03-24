import axios from "services/axios.customize"
import { IUserTable } from "./types"


interface IParams {
    current?: number;
    pageSize?:number;

}


export const getListUserApi = (current:number,pageSize:number) => {
    const urlBackend = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get<any, IBackendRes<IModelPaginate<IUserTable>>>(urlBackend)

}