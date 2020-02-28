import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 导入类型校验的模块
import propTypes from 'prop-types'
class App extends Component {

	render() {
		return (
			<div>
				<p>总共有:{this.props.iNum}条数据</p>
				<p>用户性别是:{this.props.gender}</p>
			</div>
		)
	}
}

// 给这个组件增加props类型校验
App.propTypes = {
	iNum: propTypes.number.isRequired,
	gender:propTypes.oneOf(['男','女'])
}
ReactDOM.render(<App iNum={10} gender="男"/>, document.getElementById('root'));


