import { Button, Form, FormProps, Input, Typography, ConfigProvider, App } from "antd";
import { Link, useNavigate } from "react-router-dom";
// Tái sử dụng lại đúng file styles của Register
import { RegisterContainer, BaseBackground, BackgroundPattern, BackgroundOverlay, FormBox } from "../register/styles"; 
import { loginApi } from "@/services/api"; // Đảm bảo đã export loginApi từ đây
import { useCurrentApp } from "@/shared/context/app.context";

const { Title, Text } = Typography;

const bgImage = "/trongdong.png"; 
export const bronzeDarkColor = "#b07c1b";

type FieldType = {
  username?: string; // Tùy backend dùng email hay username
  password?: string;
};

export const Login = () => {
  const { notification } = App.useApp();
  const navigate = useNavigate();
  const {setIsAuthenticated,setUser} = useCurrentApp()

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    // Gọi API Đăng nhập
    const res = await loginApi({
      username: values.username, 
      password: values.password,
    });

   if (res && res.error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: res.message, 
      });
    } else if (res && res.data) {
      notification.success({ 
        message: "Đăng nhập thành công",
      });
      setIsAuthenticated(true);
      setUser(res.data.user);
      localStorage.setItem("access_token", res.data.access_token);
      if (res.data.user.role === "ADMIN") { 
        navigate("/admin");
      } else {
        navigate("/"); 
      }
    }
  };

  return (
    <RegisterContainer>
      <BaseBackground />
      <BackgroundPattern $bg={bgImage} />
      <BackgroundOverlay />

      <FormBox>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Text style={{ fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase" }}>
            Cổng Một Cửa Đầu Tư Quốc Gia
          </Text>
          <Title level={3} style={{ marginTop: 8, color: bronzeDarkColor }}>
            Đăng nhập hệ thống
          </Title>
          <Text type="secondary">Nhập thông tin tài khoản của bạn để tiếp tục.</Text>
        </div>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: bronzeDarkColor,
              borderRadius: 6,
            },
          }}
        >
          <Form
            name="login"
            layout="vertical" 
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item<FieldType>
              label="Tên tài khoản / Email"
              name="username"
              rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
            >
              <Input placeholder="Nhập tên tài khoản của bạn" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu của bạn" />
            </Form.Item>

            <Form.Item style={{ marginTop: 32, marginBottom: 16 }}>
              <Button type="primary" htmlType="submit" block>
                Đăng nhập
              </Button>
            </Form.Item>
            
            <div style={{ textAlign: "center" }}>
              <Text>Chưa có tài khoản? </Text>
              <Link to="/register" style={{ color: bronzeDarkColor, fontWeight: 600 }}>
                Đăng ký ngay
              </Link>
            </div>
          </Form>
        </ConfigProvider>
      </FormBox>
    </RegisterContainer>
  );
};