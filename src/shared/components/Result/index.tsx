import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom"; // Sửa ở đây

interface IProps {
  title: string; 
}

export const ResultPage = (props: IProps) => {
  const navigate = useNavigate(); 

  return (
    <Result
      status="warning"
      title={props.title} 
      extra={
        <Button type="primary" onClick={() => navigate("/login")}>
          Quay lại đăng nhập
        </Button>
      }
    />
  );
};