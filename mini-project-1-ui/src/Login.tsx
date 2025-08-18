
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () =>{
    const navigate = useNavigate();

    const onFinish = async (credentials: { username: string; password:string }) => {
        try{
            const response = await
                axios.post("/login",
                {
                    username: credentials.username,
                    password: credentials.password,
                });

            if (response.status === 200){
                message.success("Login Succcessful!")
                console.log(response);
                navigate("api/customer/all")
            }
        } catch (e){
            console.error(e);
            message.error("Invalid credentials, try again")
        }

    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <Card title="Login" className="w-full max-wmd shadow-2x-1 roundedd-2x1">
                <Form name="login_form" onFinish={onFinish} layout="vertical">
                    <Form.Item name ="username" rules={[{ required: true, message: "Please input your username"}]}>
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name ="password" rules={[{ required: true, message: "Please input your password"}]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    )

}

export default Login;