import React from 'react';
import { Spin, Space } from 'antd';
import './Loader.scss'

const Loader = () => {
  return (
  <div>
    <Space size="middle" animation='border' role="status" className="loader">
        
       
        <Spin size="large" />
    </Space>

  </div>)
};

export default Loader;
