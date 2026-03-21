import React from "react"
import { useCurrentApp } from "../context/app.context"
import { useLocation } from "react-router-dom"

interface IProps {
    children : React.ReactNode
}


const ProtectedRoute = (props:IProps) =>{

    const {isAuthenticated,user} = useCurrentApp()
    const loaction = useLocation()
    const role = user?.role

    const isAdminRouter = loaction.pathname.includes("admin")
    if(isAuthenticated === false) {
        return(
            <>
            m chưa đăng nhập
            </>
        )
    }

    if(isAuthenticated === true && isAdminRouter===true){
        if(role==="USER"){
            return(
                <>

                m k có quyền truy cập 
                </>
            )
        }
    }


    return (
        <>
                {props.children}
        </>
    )
}

export default ProtectedRoute