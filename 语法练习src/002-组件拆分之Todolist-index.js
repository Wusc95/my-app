import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/todolist.css'

// 导入list组件
import List from './component/list'
// 导入Top组件
import Top from './component/top'
class ToDoList extends Component {
	constructor(props) {
		super(props)
		this.state={
			keyValue:'',
			aList: ['学习html','学习css','学习javascript'],
		}
	}
	fnChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	fnAdd=()=>{
		if(this.state.keyValue.trim() === ''){
			alert('请输入有效的目标值')
			return
		}

		this.setState((state)=>{
			return {
				aList:[state.keyValue,...state.aList],
				keyValue:''
			}
		})

	}
	fnDel=(index)=>{
		console.log(index)
		this.setState((state)=>{
			state.aList.splice(index,1)
			return {
				aList:state.aList
			}
		})
	}
	render() {
		return (
			<div className="list_con">
				<h2>To do list</h2>
				<Top keyValue={this.state.keyValue} fnChange={this.fnChange} fnAdd={this.fnAdd}/>
				<List aList={this.state.aList} fnDel={this.fnDel} />
				{
					this.state.aList.length === 0 && <p>暂无计划</p>
				}
			</div>
		)
	}
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));


