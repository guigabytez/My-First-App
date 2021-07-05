import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import axios from 'axios'

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
          minHeight: 280,
        }}
      >
        Content
    </Content>
  )
}
export default Contents