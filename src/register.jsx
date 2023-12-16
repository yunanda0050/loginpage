import { Link } from 'react-router-dom';
import { Button, Form, Input, Typography } from 'antd';
import './App.css';
  
    const Register=()=>{
    return (
      <div className="appBg">
        <Form className='loginForm' >
        <Typography.Title style={{ textAlign: 'center' }}>Register</Typography.Title>
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

          <Form.Item
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('myPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match'));
              },
            }),
          ]}
          label='Confirm Password'
          name='myConfirmPassword'
        >
          <Input.Password placeholder="Confirm your Password" />
        </Form.Item>

        <Button style={{ marginBottom: '16px' }} type="primary" htmlType="submit" block>
          Register
        </Button>

        <div>
          <span>Already Create an Account? <Link to="/login">Login</Link></span>
        </div>
        </Form>
      </div>
    )
    }
  
  export default Register;
  