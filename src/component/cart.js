import React, { Component } from 'react';
import { Breadcrumb, Table, InputNumber, Button } from 'element-react'
import store from '../store/index'

// 导入react-redux
import { connect } from 'react-redux'
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
                        return <InputNumber size="small" min={1} value={dat.num} defaultValue={dat.num} onChange={(value) => { this.props.fnNumChange(value, dat.id) }}></InputNumber>
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
                        return <Button type="danger" size="small" onClick={() => this.props.fnDel(dat.id)}>删除</Button>
                    }

                },
            ]
        }
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
                    data={this.props.data}
                    border={true}
                    highlightCurrentRow={true}
                />
                <div className='price'>
                    <b>{this.props.countPrice}</b>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // 计算总价
    let changeCountPrice = () => {
        let iTotalPrice = 0;
        state.map(item => {
            iTotalPrice += item.num * item.price
        })
        return iTotalPrice;
    }
    return {
        countPrice: changeCountPrice(),
        data: state,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        // 计数器改变时调用的方法
        fnNumChange(value, GoodId){
            dispatch({
                type: 'change_num',
                value,
                GoodId
            })
        },
        // 删除当前商品
        fnDel(id){
            dispatch({
                type: 'del_val', id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);