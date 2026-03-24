import { Button, Form, FormProps, Input, Typography, ConfigProvider, App } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContainer, BaseBackground, BackgroundPattern, BackgroundOverlay, FormBox } from "./styles";
import { registerApi } from "@/services/api";
import { useCurrentApp } from "@/shared/context/app.context";

const { Title, Text } = Typography;

const bgImage = "/trongdong.png"; 

type FieldType = {
  fullName?: string;
  password?: string;
  email?: string;
  confirmPassword?: string;
  phone: string
};

export const bronzeDarkColor = "#b07c1b";

export const Register = () => {
  const { notification} = App.useApp();
 const navigate = useNavigate()

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await registerApi({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phone: values.phone
    });

    if (res && res.error) {
      notification.error({
        message: "Đăng ký thất bại",
        description: res.message, 
      });
    } else {
      // debugger;
      notification.success({ 
        message: "Đăng ký thành công",
      });
      navigate("/login");
      console.log("chieyuern trnag");

    }

    console.log("dữ liệu sau khi đăng ký >>", res);
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
            Đăng ký tài khoản
          </Title>
          <Text type="secondary">Nhập thông tin để tạo tài khoản mới của bạn.</Text>
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
            name="register"
            layout="vertical" 
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item<FieldType>
              label="Đầy đủ họ tên"
              name="fullName"
              rules={[{ required: true, message: "Vui lòng nhập đầy đủ họ tên" }]}
            >
              <Input placeholder="Nhập tên tài khoản của bạn" />
            </Form.Item>
             <Form.Item<FieldType>
              label="email"
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email" }]}
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
            <Form.Item<FieldType>
              label="số điện thoại"
              name="phone"
              // rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu của bạn" />
            </Form.Item>


           

            <Form.Item style={{ marginTop: 32, marginBottom: 16 }}>
              <Button type="primary" htmlType="submit" block>
                Đăng ký
              </Button>
            </Form.Item>
            
            <div style={{ textAlign: "center" }}>
              <Text>Đã có tài khoản? </Text>
              <Link to="/login" style={{ color: bronzeDarkColor, fontWeight: 600 }}>
                Đăng nhập
              </Link>
            </div>
          </Form>
        </ConfigProvider>
      </FormBox>
    </RegisterContainer>
  );
}; 