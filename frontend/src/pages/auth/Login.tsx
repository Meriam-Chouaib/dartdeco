import React from 'react';
import { STRINGS } from '../../core/enums/strings';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Input,Button,  Checkbox } from 'antd';
import { Carousel } from 'antd';
import slide1 from './images/chef4.jpg';



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const { SubMenu } = Menu;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

function Comp() {
 
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="comp1">
         
            <h1>{STRINGS.COMP.CH1_COMP}</h1>
      
        
        <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Carousel autoplay>
        <div>
         
          <img src={slide1} alt="Logo" />
        </div>
        <div>
          <h3 >le 2</h3>
        </div>
        <div>
          <h3 >le 3</h3>
        </div>
        <div>
          <h3>le 4</h3>
        </div>
      </Carousel>
      </div>
      );
    
}


export default Comp;
