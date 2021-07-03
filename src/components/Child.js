import React, {useState} from 'react';
import './Child.css'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Child = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggle = () => {
        setIsCollapsed(!isCollapsed);
      };
    return(
        <> 
        <Layout style={{height: '100%'}}>
        <Sider trigger={null} collapsible collapsed={isCollapsed} >
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
        <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })} */}
            <span className='trigger' onClick={toggle}>{ isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }</span>   
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            //   minHeight: 280,
            }}
          >
            <div>
                <h1>React Lesson</h1>
                <label>Parent: </label>
                <input type="text" placeholder="Type anything..." id="searchBox" />
                <button type="reset" >Clear</button>
                {/* <h3>{props.parentSearch}</h3> */}
                <input type="text" value={`shitty aaaa ${props.parentSearch}`} placeholder="Reflection of what you type!" readOnly/>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      </>
    )
}
export default Child