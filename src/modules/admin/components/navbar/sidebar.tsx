import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SideBar = () => {
const navigate = useNavigate();
  const location = useLocation();
  const menuItems: MenuProps['items'] = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/admin"),
    },
    {
      key: "user-management",
      icon: <UserOutlined />,
      label: "Quản lý User",
      children: [
        {
          key: "/admin/manager",
          label: "Danh sách User",
          onClick: () => navigate("/admin/manager"),
        },
        // Thêm các sub-menu khác ở đây nếu cần (vd: Thêm mới User)
      ],
    },
  ];

    return (
        <Sider width={200} style={{ background: "#333" }}>
          <Menu
           mode="inline"
        // Tự động active menu dựa trên URL hiện tại
        selectedKeys={[location.pathname]} 
        // Mở sẵn tab Quản lý User
        defaultOpenKeys={["user-management"]} 
        style={{ height: "100%", borderInlineEnd: 0 }}
        items={menuItems}
          />
        </Sider>
    )
}