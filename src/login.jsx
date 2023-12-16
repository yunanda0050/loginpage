import { Link } from 'react-router-dom';
import { Button, Form, Input, Typography } from 'antd';
import './App.css';
import Register from './register';
  
    const Login=()=>{
    return (
      <div className="appBg">
        <Form className='loginForm' >
          <Typography.Title style={{ textAlign: 'center' }}>Login</Typography.Title>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email",
              },
            ]}
            label='Email' 
            name={'myEmail'}
          >
            <Input placeholder="Enteryour Email"/>
          </Form.Item>

          <Form.Item 
          rules={[
            {
              required: true,
              message: "Please enter your passworrd",
            },
          ]}
            label='Password' 
            name={'myPassword'}
          >
            <Input.Password placeholder="Enteryour Password"/>
          </Form.Item>

          <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Remember Me" style={{ marginRight: '50px' }}>Remember Me</label>
            <Link to="">Forgot Password</Link>
          </div>
        </div>

        <Button style={{ marginBottom: '16px' }} type="primary" htmlType="submit" block>
          Login
        </Button>

        <div>
          <span>New Here? <Link to="/register">Create an Account</Link></span>
        </div>
        </Form>
      </div>
    )
    }
  
  export default Login;
  