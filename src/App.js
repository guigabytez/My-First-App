import React, {useState} from 'react'
import { Layout } from 'antd';

import Sidebar from './components/navigation/Sidebar'
import Navbar from './components/navigation/Navbar'
import Content from './components/navigation/Contents'


const App = () => {
  const [ isCollapsed, setIsCollapsed ] = useState()

  const callBackToggle = (toggleData) => {
    setIsCollapsed(toggleData)
  }

  return (  
    <Layout>
      <Sidebar isCollapsed={isCollapsed}/>
      <Layout>
        <Navbar isCollapsed={isCollapsed} onCallBackToggle={callBackToggle}/>
        <Content />
      </Layout>
    </Layout>
  )
}
export default App