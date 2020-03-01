import React, { Component } from 'react';
import { Breadcrumb, Table, InputNumber, Button } from 'element-react'
import store from '../store/index'
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    label: '名称',
                    prop: 'goods_name'
                },
                {
                    label: '图片',
                    prop: 'url',
                    render: dat => {
                        return (
                            <img src={dat.url} alt='商品图片' style={{ 'width': '100%', 'margin': '10px 0' }} />
                        )
                    }
                },
                {
                    label: '数量',
                    prop: 'num',
                    render: dat => {
                        return <InputNumber size="small" min={1} value={dat.num} defaultValue={dat.num} onChange={(value) => { this.fnNumChange(value, dat.id) }}></InputNumber>
                    }

                },
                {
                    label: '单价',
                    prop: 'price',
                },
                {
                    label: '总价',
                    render: dat => {
                        return <span>{dat.price * dat.num}</span>
                    }

                },
                {
                    label: '操作',
                    render: dat => {
                        return <Button type="danger" size="small" onClick={()=>this.fnDel(dat.id) }>删除</Button>
                    }

                },
            ],
            // data:[
            //     {
            //         "id": 1001,
            //         "goods_name": "男式黑白格子衬衫",
            //         "url": "./static/images/clothes01.jpg",
            //         "price": 169,
            //         "num": 1
            //     }
            // ]

            data: store.getState(),
            countPrice : this.changeCountPrice()
        }
        this.unsubscribe = store.subscribe(this.fnStoreChange)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    // 数据仓库改变时调用的方法
    fnStoreChange = () => {
        this.setState({
            data: store.getState(),
            countPrice:this.changeCountPrice()
        })
    }
    // 计数器改变时调用的方法
    fnNumChange = (value, GoodId) => {
        store.dispatch({
            type: 'change_num',
            value,
            GoodId
        })
    }

    // 计算总价
    changeCountPrice=()=>{
        let aGoods_list = store.getState();
        let iTotalPrice = 0;
        if(!aGoods_list) return iTotalPrice;

        aGoods_list.map(item=>{
            iTotalPrice += item.num * item.price
        })
        return iTotalPrice;
    }

    // 删除当前商品
    fnDel=(id)=>{
        store.dispatch({
            type:'del_val',id
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb separator="/" className='mp10'>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>购物车</Breadcrumb.Item>
                </Breadcrumb>
                <Table
                    className='mp10'
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    highlightCurrentRow={true}
                />
                <div className='price'>
                    <b>{this.state.countPrice}</b>
                </div>
            </div>
        );
    }
}

export default Cart;