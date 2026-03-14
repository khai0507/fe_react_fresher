import { LoginOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, Space, theme } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { useNavigate } from "react-router-dom";


export const AppHeader = () =>{

    const { Header} = Layout;
    const navigate = useNavigate()
    const navItems = [
    { key: "/home", label: "Home" },
    { key: "/book", label: "Book" },
  ];

  // Menu Dropdown cho User
  const userMenuItems = [
    { key: "/login", label: "Đăng nhập", icon: <LoginOutlined /> },
    { key: "/register", label: "Đăng ký", icon: <UserAddOutlined /> },
  ];

  



    return (
        <>
        <Header style={{ position: 'sticky', 
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        padding: "0 24px",}}>
        
       <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div 
          className="demo-logo" 
          style={{ width: 40, height: 40, background: "rgba(255,255,255,0.2)", borderRadius: '50%', marginRight: 24, cursor: 'pointer' }} 
          onClick={() => navigate('/home')}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]} // Tự động sáng tab đang đứng
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => navigate(e.key)}
        />
      </div>

      <div>
        <Dropdown
          menu={{ items: userMenuItems, onClick: (e) => navigate(e.key) }}
          trigger={['click', 'hover']}
          placement="bottomRight"
        >
          <Space style={{ cursor: "pointer", color: "white" }}>
            <Avatar icon={<UserOutlined />} />
            Tài khoản
          </Space>
        </Dropdown>
      </div>
      </Header>
        </>
    )
}