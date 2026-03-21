import { CrownOutlined, LoginOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, ConfigProvider, Dropdown, Layout, Menu, notification, Space, theme } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useNavigate } from "react-router-dom";
import dongsonBackground from "public/image.png"
import quochuy from "public/quochuy.png"
import { EmblemIcon, HeaderWrapper, LeftSection, StyledMenu } from "./styled";
import { SideBar } from "../navbar/sidebar";
import { logoutApi } from "@/service/api";
import { useCurrentApp } from "@/shared/context/app.context";

export const AppHeaderAdmin = () =>{

    const navigate = useNavigate()

    const {setUser,setIsAuthenticated} = useCurrentApp()

  //   const navItems = [
  //   { key: "/home", label: "Home" },
  //   { key: "/book", label: "Book" },
  // ];

  // Menu Dropdown cho User
  const userMenuItems = [
    { key: "/login", label: "Đăng nhập", icon: <LoginOutlined /> },
    { key: "/register", label: "Đăng ký", icon: <UserAddOutlined /> },
    { key: "logout", label: "logout", icon: <UserAddOutlined /> },


    
  ];


  const  logoutClick = async() =>{
                const res =  await logoutApi();
                if(res.data ){
                    setUser(null)
                    setIsAuthenticated(false)
                    localStorage.removeItem("access_token")
                  navigate("/login");
                  notification.success(
                    {message:"bạn đã đăng xuất thành công "}
                  )


                }
                notification.error(       
                               {message:"đăng xuất thất bại "}
                              )
  }
  const handleMenuClick = async (e: any) => {
        if (e.key === "logout") {
            try {
                logoutClick()
                
            } catch (error) {
                console.error("Lỗi đăng xuất:", error);
            }
        } else {
            navigate(e.key);
        }
    };

  



    return (
        <>
        <HeaderWrapper
        $bg ={dongsonBackground} 
        >

        
        
       <LeftSection>
        <ConfigProvider theme={{ token: { colorWarningHover: "#fff8dc" } }}>
          <EmblemIcon $bg={quochuy} onClick={() => navigate("/home")} />
        </ConfigProvider>

        <ConfigProvider
          theme={{
            components: {
              Menu: {
                activeBarHeight: 0, 
                itemColor: "#555", 
                itemHoverColor: "#8b4513", // Màu chữ khi hover (Nâu đất)
                itemHoverBg: "rgba(139, 69, 19, 0.08)", // Nền khi hover
                horizontalItemSelectedColor: "#8b4513", // Màu chữ khi active
                horizontalItemSelectedBg: "rgba(139, 69, 19, 0.15)", // Nền khi active
                itemBorderRadius: 8, // Bo góc nút
              },
            },
          }}
        >
        <StyledMenu
            theme="light"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            // items={navItems}
            onClick={(e:any) => navigate(e.key)}
          />

        </ConfigProvider>
      </LeftSection>

 
        <Dropdown
          menu={{ items: userMenuItems, onClick :handleMenuClick   }}
          trigger={['click', 'hover']}
          placement="bottomRight"
        >
         <Space style={{ cursor: "pointer", color: "#333", fontWeight: 500 }}>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#8b4513" }} />
            Tài khoản
          </Space>
        </Dropdown>
     
      </HeaderWrapper>
        </>
    )
}
