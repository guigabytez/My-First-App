import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import axios from 'axios'
import Dashboard from '../../menu_pages/Dashboard'
import Activity from '../../menu_pages/Activity'
import Result from '../../menu_pages/Result'
import { 
  Switch,
  Route
} from 'react-router-dom'

import '../../styles/content.css'

const { Content } = Layout


const Contents = () => {
  useEffect(async () => {
    // const result = await axios('https://jsonplaceholder.typicode.com').get('/posts')

    // axios('https://jsonplaceholder.typicode.com')
    //   .get('/posts')
    //   .then(data => console.log(data))
    //   .catch(err => console.warn(err))

  }, [])

  
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
          <Route path="/activity" component={Activity} />
          <Route path="/result" component={Result} />
        </Switch>
    </Content>
  )
}
export default Contents