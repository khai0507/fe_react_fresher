import { Button, Checkbox, Flex, Form, FormProps, Input } from "antd"
import {loginApi} from "../../../../service/api"
export const Register =() =>{


    type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  console.log('Success:', values);

  const res = await loginApi("user@gmail.com","123456")

  console.log("res>>>",res)
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

    return(
        <>

        
  <Form
    name=""
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ 
        // maxWidth: 600,
        padding: '24px',
         borderRadius: '8px'   ,
          background: '#fff',
          

    }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    

  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Flex justify="flex-end">
             <Checkbox>Remember me</Checkbox>
      </Flex>
    </Form.Item>

    <Form.Item label={null}>
        <Flex justify="flex-end">
                <Button type="primary" htmlType="submit">
                Submit
            </Button>
      </Flex>
    </Form.Item>
  </Form>
    </>
    )
}