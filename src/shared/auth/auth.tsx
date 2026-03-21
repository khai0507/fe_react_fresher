import React from "react";
import { Outlet } from "react-router-dom";
import { useCurrentApp } from "../context/app.context";
import { ResultPage } from "../components/Result";
import { Role } from "../constants/role";
import { LoadingCustomer } from "../components/loading/loading";

interface IProps {
  allowedRoles?: Role[];
  children?: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: IProps) => {
  const { isAuthenticated, user, isAppLoading } = useCurrentApp();

  // 1. Đợi App khởi tạo/fetch token (Tránh lỗi F5 văng ra ngoài)
  if (isAppLoading) return <LoadingCustomer isAppLoading />;

  // 2. Chưa đăng nhập
  if (!isAuthenticated) return <ResultPage title="Bạn chưa đăng nhập" />;

  // 3. Kiểm tra Role (Nếu route yêu cầu quyền)
  if (allowedRoles && user && !allowedRoles.includes(user.role as Role)) {
    return <ResultPage title="Bạn không có quyền truy cập trang này" />;
  }

  // 4. Pass
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;