import { Role } from "@/shared/constants/role";
import { DatePickerType } from "antd/es/date-picker"

export interface IUserTable {

                _id: string,
               fullName:string,
               email:string,
               phone:string,
                role: Role,
               avatar:string,
               isActive: boolean,
               type:string,
               createdAt:DatePickerType,
               updatedAt:DatePickerType,
}