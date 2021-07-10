import React, { useState } from 'react';
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';


const { Header } = Layout


const Navbar = ({ isCollapsed: propsIsCollapsed, onCallBackToggle }) => {
    const [ isCollapsed, setIsCollapsed ] = useState(propsIsCollapsed)

    const toggle = () => {
        setIsCollapsed(!propsIsCollapsed)
        onCallBackToggle(!propsIsCollapsed)
    }
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <span className="trigger" onClick={toggle}>
                { isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
            </span>
          </Header>
    )
}
export default Navbar