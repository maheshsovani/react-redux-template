import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Form, Input, message, Typography} from "antd";
import {LockTwoTone, MailTwoTone} from "@ant-design/icons";
import CustomLayout from "../components/CustomLayout";

const {Title} = Typography;

const Login = ({history}) => {
  const [email, setLocalEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <CustomLayout>
      <Form
        name="normal_login"
        initialValues={{remember: true}}
      >
        <Title level={4} style={{textAlign: "center"}}>Log In</Title>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid Email!",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailTwoTone className="site-form-item-icon"/>}
            placeholder="yourmail@domain.com"
            onChange={(e) => setLocalEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockTwoTone className="site-form-item-icon"/>}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type={"primary"} onClick={() => console.log('Successfully logged in !!')} block>
            Log In
          </Button>
          Don't have an account? <Link to="/signup">Create One</Link>
        </Form.Item>
      </Form>
    </CustomLayout>
  );
};

export default Login;
