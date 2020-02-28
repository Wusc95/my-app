import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Father extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Rose',
			iNum: 0
		}
	}
	fnSend=(num)=>{
		this.setState({
			iNum:num
		})
	}
	render() {
		return (
			<div>
				<h1>父组件</h1>
				<p>{'接收子组件传递过来的数据:'+this.state.iNum}</p>
				<Son name={this.state.name} fnSend={this.fnSend}></Son>
			</div>
		)
	}
}
class Son extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<p>这是子组件</p>
				<p>{this.props.name}</p>
				<input type='button' value='向父组件发送数据' onClick={()=>{this.props.fnSend(10)}} />
			</div>

		)
	}
}

ReactDOM.render(<Father />, document.getElementById('root'));


