import React, { Component } from 'react';
import { Breadcrumb, Layout, Card, Button } from 'element-react'

// 导入图片
// import clothes01 from '../static/images/clothes01.jpg'
// import clothes02 from '../static/images/clothes02.jpg'
// import clothes03 from '../static/images/clothes03.jpg'
// import clothes04 from '../static/images/clothes04.jpg'

// 导入reducer
import store from '../store/index'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                aGoods_list: [
                    {
                        "id": 1001,
                        "goods_name": "男式黑白格子衬衫",
                        "url": "./static/images/clothes01.jpg",
                        "price": 169,
                        "num": 1
                    },
                    {
                        "id": 1002,
                        "goods_name": "纯棉印花宽松长袖T恤",
                        "url": "./static/images/clothes02.jpg",
                        "price": 69,
                        "num": 1
                    },
                    {
                        "id": 1003,
                        "goods_name": "男士连帽夹克2019春季新款",
                        "url": "./static/images/clothes03.jpg",
                        "price": 249,
                        "num": 1
                    },
                    {
                        "id": 1004,
                        "goods_name": "2019夏装新品时尚百搭",
                        "url": "./static/images/clothes04.jpg",
                        "price": 49,
                        "num": 1
                    }
                ]
            }
        }
    }
    AddGoods=(obj)=>{
        store.dispatch({
            type:'add_goods',
            value:obj
        })
    }
    render() {
        return (
            <div>
                <Breadcrumb separator="/" className='mp10'>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                </Breadcrumb>
                <Layout.Row gutter="20" className='mp10'>

                    {
                        this.state.data.aGoods_list.map((item, index) => {
                            return (
                                <Layout.Col span="6" key={item.id}><div className="grid-content bg-purple" >
                                    <Card bodyStyle={{ padding: 0 }}>
                                        <img src={item.url} className="image" />
                                        <div style={{ padding: 14 }}>
                                            <span style={{ fontSize: 13 }}>{item.goods_name}</span>
                                            <div className="bottom clearfix">
                                                <p className='mp10' style={{ color: 'red' }}>￥<span style={{ fontSize: 22 }}>{item.price}</span></p>
                                                <Button size="small" type="danger" className="button" onClick={()=>{this.AddGoods(item)}}>加入购物车</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div></Layout.Col>

                            )
                        })
                    }

                    {/* <Layout.Col span="6"><div className="grid-content bg-purple">
                        <Card bodyStyle={{ padding: 0 }}>
                            <img src={clothes02} className="image" />
                            <div style={{ padding: 14 }}>
                                <span style={{ fontSize: 13 }}>纯棉印花宽松长袖T恤</span>
                                <div className="bottom clearfix">
                                    <p className='mp10' style={{ color: 'red' }}>￥<span style={{ fontSize: 22 }}>169</span></p>
                                    <Button size="small" type="danger" className="button">加入购物车</Button>
                                </div>
                            </div>
                        </Card>
                    </div></Layout.Col>
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                        <Card bodyStyle={{ padding: 0 }}>
                            <img src={clothes03} className="image" />
                            <div style={{ padding: 14 }}>
                                <span style={{ fontSize: 13 }}>男士连帽夹克</span>
                                <div className="bottom clearfix">
                                    <p className='mp10' style={{ color: 'red' }}>￥<span style={{ fontSize: 22 }}>169</span></p>
                                    <Button size="small" type="danger" className="button">加入购物车</Button>
                                </div>
                            </div>
                        </Card>
                    </div></Layout.Col>
                    <Layout.Col span="6"><div className="grid-content bg-purple">
                        <Card bodyStyle={{ padding: 0 }}>
                            <img src={clothes04} className="image" />
                            <div style={{ padding: 14 }}>
                                <span style={{ fontSize: 13 }}>新品时尚百搭</span>
                                <div className="bottom clearfix">
                                    <p className='mp10' style={{ color: 'red' }}>￥<span style={{ fontSize: 22 }}>169</span></p>
                                    <Button size="small" type="danger" className="button">加入购物车</Button>
                                </div>
                            </div>
                        </Card>
                    </div></Layout.Col>
                    */}
                </Layout.Row>


            </div>
        );
    }
}

export default List;