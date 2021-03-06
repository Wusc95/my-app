import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/todolist.css'

// 导入axios
import axios from 'axios'
// 导入数仓库
import store from './store/index.js'
// 导入list组件
import List from './component/list'
// 导入Top组件
import Top from './component/top'

import {CHANGE_VAL,ADD_VAL,DEL_VAL,INIT_DATA} from './store/actionType'
class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()

        // 组件初始化的时候开启订阅模式
        this.unsubscribe=store.subscribe(this.fnStoreChange)
    }
    // 在页面渲染的时候，请求接口iuhuoqu数据
    componentDidMount(){
        axios.get('/data.json').then(dat=>{
            store.dispatch({
                type:INIT_DATA,
                value:dat.data
            })
        })
    }
    // 数据仓库更改好调用的方法
    fnStoreChange=()=>{
        this.setState(store.getState())
    }
    fnChange=(e)=>{
        // 定义一个数据工单
        let action = {
            type:CHANGE_VAL,
            value:e.target.value
        }
        //提交工单 通过store.dispatch
        store.dispatch(action)
    }
    fnAdd=()=>{
        let action = {
            type:ADD_VAL
        }
        store.dispatch(action)
    }
    fnDel=(indx)=>{
        let action = {
            type:DEL_VAL,
            value:indx
        }

        store.dispatch(action)
    }
    // 组件销毁时调用的
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        let {aList,sTodo} = this.state
        return (
            <div className="list_con">
                <h2>To do list</h2>
                <input type="text" name="" value={sTodo} onChange={this.fnChange} className="inputtxt" />
                <input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={this.fnAdd}/>

                <ul id="list" className="list">
                    {
                        aList.map((item,i)=>{
                            return <li key={i}><span>{item}</span><a href="#" className="del" onClick={()=>{this.fnDel(i)}}>删除</a></li>
                        })
                    }

                </ul>

            </div>
        )
    }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));


