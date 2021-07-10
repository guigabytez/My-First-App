import React from 'react'
import { Layout } from 'antd'
import Dashboard from '../../menu_pages/Dashboard'
import Post from '../../menu_pages/Post'
import Result from '../../menu_pages/Result'
import { 
  Switch,
  Route
} from 'react-router-dom'


const { Content } = Layout


const Contents = () => {
  return (
    <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 'auto',
        }}
      >
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/post" component={Post} />
          <Route path="/result" component={Result} />
        </Switch>
    </Content>
  )
}
export default Contents