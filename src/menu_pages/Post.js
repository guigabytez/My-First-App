import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Table, Space, Row, Col, Button, Tooltip } from 'antd';
import {EditFilled, DeleteFilled} from '@ant-design/icons'

const { Meta } = Card

const Post = () => {
    
    // const [usersData, setusersData] = useState([])
    const [postsData, setPostData] = useState([])
    // console.log('usersData: ', usersData);
    console.log('postsData:', postsData);
    
    
    useEffect(() => {
        //request()
        postsReq()    
    }, [])

    // const request = async () => {
    //     const result = await axios({
    //       method: 'get',
    //       url: 'https://api.github.com/users',
    //     //   url: 'https://jsonplaceholder.typicode.com/posts',
    //     })
    //     setusersData(result.data)
    // }

    const postsReq = async () => {
        const posts = await axios({
            method: 'get',
            url: 'https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/learn-rxygj/service/Posts/incoming_webhook/getAll',
            //url: 'http://localhost:5000/posts',
        })
        setPostData(posts.data)
    }
    
    const columns = [
        {
          title: 'Post ID',
          dataIndex: '_id',
          key: 'id',         
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'body',
        },
        {
          title: 'Descrtiption',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, posts) => (
            <Space size="middle">
              {/* <a>Invite User: {posts._id}</a> */}
              <Tooltip title="Edit">
                {/* onClick={'handleClickEdit'} */}
                <Button shape="circle" icon={<EditFilled />} />
              </Tooltip>
              <Tooltip title="Delete">
                {/* onClick={'handleClickDelete'} */}
                <Button shape="circle" icon={<DeleteFilled />} />
              </Tooltip>              
            </Space>
          ),
        },
      ];

    return (
        <div className="post-card">
            {/* <Row>

                {
                    usersData.map(({ login , id, html_url, avatar_url }) => {
                        // console.log('login: ', login);
                    return   (
                        // <Row>
                            <Col xs={24} sm={24} md={8} lg={6}>
                                <Card key={id}
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={avatar_url}/>}
                                >
                                    <Meta title={login} description={html_url} />
                                    
                                </Card>
                            </Col>
                        // </Row>
                    ) 
                        
                    })

                }
            </Row> */}
            
            {/* <Card title="Default size card" > 
            {
                postsData.map(({ id, body, title }) => (
                    <div key={id} style={{ borderBottom: '1px solid black' }}>
                        <p style={{ fontStyle: 'italic' }}>{title}</p>
                        <hr />
                        <span>{body}</span>
                    </div>
                ))
            }
             </Card> */}
             <Table columns={columns} dataSource={postsData}/>
        </div>
        
    )
}
export default Post
