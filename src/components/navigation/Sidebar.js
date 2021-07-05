import React from 'react';
import { Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import '../../styles/sidebar.css'

const { Sider } = Layout


const Sidebar = (props) => {
    return (
        <Sider trigger={null} collapsible collapsed={props.isCollapsed} >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Activity
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Result
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
export default Sidebar
