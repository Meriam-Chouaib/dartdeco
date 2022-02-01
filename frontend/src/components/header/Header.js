import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//useDispatch : if you want call an action login action
//useSelector : if you want bring something in userLogin state
import "./Header.scss";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined,RadarChartOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PATHS } from '../../core/enums/paths';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/userActions';
import {  Dropdown, message, Space } from 'antd';
import { DownOutlined, UserOutlined ,LogoutOutlined,ShopOutlined} from '@ant-design/icons';






const { SubMenu } = Menu;

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

const Header = () => {
    const dispatch = useDispatch()
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (

        <div className="header">
            <div className="header-links ">
                <Menu mode="horizontal" className="menu">
                    <Menu.Item key="mail" icon={<ShopOutlined />}>
                        <a href={PATHS.HOME} target="_blank" rel="noopener noreferrer" className="nav-item">
                          HOME
                         </a>
                    </Menu.Item>
               
                    <Menu.Item key="app"  icon={<AppstoreOutlined />}>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="nav-item">
                          About Us
                         </a>
                    </Menu.Item>
                    <Menu.Item key="" icon={<MailOutlined />}>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="nav-item">
                    Contact Us
                         </a>
                 
                    </Menu.Item>
                    
                 
                    {userInfo ? (
                    <SubMenu key="SubMenu" icon={<UserOutlined />} title={userInfo.name} className="userName">
                                    
                    <Menu.Item key="setting:1" onClick={logoutHandler} icon= {<LogoutOutlined />}>logout</Menu.Item>
                    <Menu.Item key="setting:2" icon ={<SettingOutlined />}  > <a href={PATHS.PROFILE}>profile</a></Menu.Item>

                    </SubMenu>

                                
                        
                        ) : 
                    <Menu.Item key="alipay">
                    <a href={PATHS.SIGNIN} target="_blank" rel="noopener noreferrer" className="nav-item">
                          SIGN IN
                         </a>
                    </Menu.Item>
                    }
                   
              </Menu>
            </div>
            <div className="header-logo ">
              <RadarChartOutlined width={"20px"} />
             </div>

        </div>

    )
}

export default Header;
