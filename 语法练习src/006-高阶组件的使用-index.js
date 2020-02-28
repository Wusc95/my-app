import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cat from './image/cat.png'


// 定义一个高阶组件
function withMouse(Comp) {
	class Mouse extends Component {
		constructor(props) {
			super(props)
			this.state = {
				x: 0,
				y: 0
			}
		}
		// 获取鼠标坐标
		fnGetMouse = (e) => {
			this.setState({
				x: e.clientX,
				y: e.clientY
			})
		}
		componentDidMount() {
			window.addEventListener('mousemove', this.fnGetMouse)
		}
		render() {
			// return (
			// 	<div>
			// 		<p>{'鼠标的坐标是:' + this.state.x + '---------' + this.state.y}</p>
			// 		<Cat x={this.state.x} y={this.state.y} />
			// 	</div>
			// )

			return <Comp {...this.state} {...this.props}/>
		}
	}
	return Mouse;
}


function Cat(props) {
	return <img src={cat} alt={props.sAlt} style={{ position: 'fixed', left: (props.x - 40) + 'px', top: (props.y - 50) + 'px' }} />
}

// 使用高阶组件
let MouseCat = withMouse(Cat)

ReactDOM.render(<MouseCat sAlt='这是一只猫' />, document.getElementById('root'));


