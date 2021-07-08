import React from 'react';
import { Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import { 
    Switch,
    Link
} from 'react-router-dom'

import '../../styles/sidebar.css'

const { Sider } = Layout


const Sidebar = (props) => {
    
    
    return (
        <Sider trigger={null} collapsible collapsed={props.isCollapsed} >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} >
                <Menu.Item key="/" icon={<UserOutlined />}>
                    Dashboard
                    <Link to="/" />
                </Menu.Item>
                
                <Menu.Item key="/activity" icon={<VideoCameraOutlined />}>
                    Activity
                    <Link to="/activity" />
                </Menu.Item>
                                
                <Menu.Item key="/result" icon={<UploadOutlined />}>
                    Result
                    <Link to="/result" />
                </Menu.Item>
                
            </Menu>
        </Sider>
    )
}
export default Sidebar
