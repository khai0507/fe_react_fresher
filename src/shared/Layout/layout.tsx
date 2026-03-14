import { Outlet } from "react-router-dom"
import { AppHeader } from "../components/header/app.header"
import { Layout } from "antd"
import { ContentApp } from "shared/components/content/app.content"
import {FooterApp} from "shared/components/footer/app.footer"
export const LayOut = () =>{

    return(

        <>

             <Layout>
                <AppHeader/>
                {/* <Outlet/> */}

                <ContentApp>
                <Outlet /> 
            </ContentApp>

            <FooterApp/>


            </Layout>
        
        
        </>
    )
}
