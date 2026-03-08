import { Outlet } from "react-router-dom"
import { AppHeader } from "../components/layout/app.header"

export const LayOut = () =>{

    return(

        <>
        <AppHeader/>
        <Outlet/>
        
        
        </>
    )
}
