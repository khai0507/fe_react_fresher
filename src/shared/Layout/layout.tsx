import { Outlet } from "react-router-dom"
import { AppHeader } from "../components/header/app.header"
import { Layout } from "antd"
import { ContentApp } from "shared/components/content/app.content"
import { FooterApp } from "shared/components/footer/app.footer"
import { useEffect, useState } from "react"
import { fetAccountApi } from "@/service/api"
import { useCurrentApp } from "../components/context/app.context"
import { ClipLoader } from "react-spinners"
import { CSSProperties } from "styled-components"
export const LayOut = () => {
    const { setUser, setIsAuthenticated, isAppLoading, setIsAppLoading } = useCurrentApp()

    // const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7");
    const fetchAccount = async () => {
        setIsAppLoading(true); // Bật loading TRƯỚC khi gọi API
        try {
            const res = await fetAccountApi();
            if (res && res.data) {
                setUser(res.data.user);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsAppLoading(false); // Tắt loading dù API thành công hay thất bại
        }
    };
    useEffect(() => {
        fetchAccount()

    }, [])
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        position: "fixed", // Cố định vị trí
        top: "50%",        // Ra giữa màn dọc
        left: "50%",       // Ra giữa màn ngang
        transform: "translate(-50%, -50%)",
        zIndex: 9999       // Luôn nằm trên cùng
    };

    return (

        <>

            <Layout>
                <AppHeader />
                {/* <Outlet/> */}

                <ContentApp>
                    {isAppLoading ? (
                        <ClipLoader
                            color={color}
                            loading={isAppLoading}
                            cssOverride={override}
                            size={150}
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
