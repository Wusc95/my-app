import React, { Component } from 'react';
// 导入数据仓库
import store from './store/index';
// 导入路由
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// 导入element-react的样式
import 'element-theme-default'
//导入自定义样式
import './static/css/main.css'
// 导入react组件
import { Button, Badge } from 'element-react'

//导入组件
import List from './component/list'
import Cart from './component/cart'
// 导入图片
import banner from './static/images/banner.png'
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.unsubscribe=store.subscribe(this.fnChangeStore)
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    fnChangeStore=()=>{
        let Goods = store.getState();
        let iTotalData=0;
        for (let i = 0; i < Goods.length; i++) {
           iTotalData+=Goods[i].num
        }
        this.setState({
            count:iTotalData
        })
    }
    render() {
        return (
            <div className='wrap'>
                <img className='banner' src={banner} alt='' />
                <div className='menu'>
                    <Button className='link' type="success"><a href='#/list'>商品列表</a></Button>
                    <Badge value={this.state.count}>
                        <Button className='link' type="success"><a href='#/cart'>购物车</a></Button>
                    </Badge>
                </div>

                <HashRouter>
                    <Switch>
                        <Route path='/list' component={List} />
                        <Route path='/cart' component={Cart} />
                        <Redirect exact from='/' to='/list' />
                        <Route component={NotFound}></Route>
                    </Switch>

                </HashRouter>
            </div>
        );
    }
}

// 定义404页面
function NotFound(){
    return (
        <div>
            <h1>页面未找到</h1>
        </div>
    )
}

export default App;