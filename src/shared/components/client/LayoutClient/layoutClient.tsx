import { Outlet } from "react-router-dom"
import { AppHeader } from "../header/app.header"
import { Layout } from "antd"
import { ContentApp } from "@/shared/components/client/content/app.content"
import { FooterApp } from "@/shared/components/client/footer/app.footer"
import { useEffect, useState } from "react"
import { fetAccountApi } from "@/service/api"
import { useCurrentApp } from "../../../context/app.context"
import { ClipLoader } from "react-spinners"
import { CSSProperties } from "styled-components"
import { LoadingCustomer } from "../../loading/loading"
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
