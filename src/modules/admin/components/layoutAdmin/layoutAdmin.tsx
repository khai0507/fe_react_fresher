import { Layout, Menu } from "antd"
import { AppHeaderAdmin } from "../header/app.header"
import { ContentAppAdmin } from "../content/app.content"
import { Outlet } from "react-router-dom"
import { LoadingCustomer } from "../../../../shared/components/loading/loading"
import { useCurrentApp } from "@/shared/context/app.context"
import { SideBar } from "../navbar/sidebar"
import Sider from "antd/es/layout/Sider"

export const LayoutAdmin = () => {
    const { isAppLoading } = useCurrentApp()
    
    return (
         <Layout style={{ height : "100vh"}}>
                <AppHeaderAdmin/>
      <Layout>
        <SideBar/>
        <Layout style={{ padding: '0 24px 24px' }}>

             <ContentAppAdmin>
                                {isAppLoading ? (
                                    <LoadingCustomer
                                        isAppLoading
                                    />
                                ) : (
                                    <Outlet />
                                )}
                            </ContentAppAdmin>
        
          
        </Layout>
      </Layout>
    </Layout>
    )
}