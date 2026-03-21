import { Layout } from "antd"
import { AppHeaderAdmin } from "../header/app.header"
import { ContentAppAdmin } from "../content/app.content"
import { Outlet } from "react-router-dom"
import { LoadingCustomer } from "../../loading/loading"
import { useCurrentApp } from "@/shared/context/app.context"
import { SideBar } from "../navbar/sidebar"

export const LayoutAdmin = () =>{
    const {isAppLoading} = useCurrentApp()
    return(
        <>
         <Layout>
                <AppHeaderAdmin />
                {/* <Outlet/> */}
                  <SideBar>
                
                          </SideBar>

                <ContentAppAdmin>
                    {isAppLoading ? (
                        <LoadingCustomer
                            isAppLoading
                        />
                    ) : (
                        <Outlet />
                    )}
                </ContentAppAdmin>




            </Layout></>
    )

}