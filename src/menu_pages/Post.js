import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Table, Space, Row, Col } from 'antd';

const { Meta } = Card

const Post = () => {
    const [postData, setPostData] = useState([])
    console.log('postData: ', postData);
    
    
    useEffect(() => {
        
        request()
        
    }, [])

    const request = async () => {
        const result = await axios({
          method: 'get',
          url: 'https://api.github.com/users',
        //   url: 'https://jsonplaceholder.typicode.com/posts',
        })
        setPostData(result.data)
    }

    // const columns = [
    //     {
    //       title: 'Post ID',
    //       dataIndex: 'id',
    //       key: 'id',
          
    //     },
    //     {
    //       title: 'Post Body',
    //       dataIndex: 'body',
    //       key: 'body',
    //     },
    //     {
    //       title: 'Post Title',
    //       dataIndex: 'title',
    //       key: 'title',
    //     },
    //     {
    //       title: 'User ID',
    //       key: 'userId',
    //       dataIndex: 'userId',
         
    //     },
    //     {
    //       title: 'Action',
    //       key: 'action',
    //       render: (text, post) => (
    //         <Space size="middle">
    //           <a>Invite User: {post.userId}</a>
    //           <a>Delete</a>
    //         </Space>
    //       ),
    //     },
    //   ];

    return (
        <div className="post-card">
            <Row>

                {
                    postData.map(({ login , id, avatar_url }) => {
                        console.log('login: ', login);
                    return   (
                        // <Row>
                            <Col xs={24} sm={24} md={12} lg={6}>
                                <Card key={id}
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={avatar_url}/>}
                                >
                                    <Meta title={login} description={avatar_url} />
                                    
                                </Card>
                            </Col>
                        // </Row>
                    ) 
                        
                    })

                }
            </Row>
            
            {/* <Card title="Default size card" > */}
            {/* {
                postsData.map(({ id, body, title }) => (
                    <div key={id} style={{ borderBottom: '1px solid black' }}>
                        <p style={{ fontStyle: 'italic' }}>{title}</p>
                        <hr />
                        <span>{body}</span>
                    </div>
                ))
            } */}
                {/* <Table columns={columns} dataSource={postData}/> */}
               
            {/* </Card> */}
        </div>
        
    )
}
export default Post
