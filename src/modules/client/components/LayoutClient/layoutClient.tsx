import { Outlet } from "react-router-dom"
import { AppHeader } from "../header/app.header"
import { Layout } from "antd"
import { ContentApp } from "@/modules/client/components/content/app.content"
import { FooterApp } from "@/modules/client/components/footer/app.footer"
import { useEffect, useState } from "react"
import { fetAccountApi } from "@/services/api"
import { useCurrentApp } from "../../../../shared/context/app.context"
import { ClipLoader } from "react-spinners"
import { CSSProperties } from "styled-components"
import { LoadingCustomer } from "../../../../shared/components/loading/loading"
export const LayOutClient = () => {
    const { setUser, setIsAuthenticated, isAppLoading, setIsAppLoading } = useCurrentApp()

    // const [loading, setLoading] = useState(true);
  
   

    return (

        <>

            <Layout>
                <AppHeader />
                {/* <Outlet/> */}

                <ContentApp>
                    {isAppLoading ? (
                        <LoadingCustomer
                            isAppLoading
                        />
                    ) : (
                        <Outlet />
                    )}
                </ContentApp>

                <FooterApp />



            </Layout>


        </>
    )
}
