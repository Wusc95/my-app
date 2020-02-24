import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cat from './image/cat.png'
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

		return this.props.move(this.state)
	}
}

function Cat(props) {
	return <img src={cat} alt='猫' style={{position:'fixed',left:(props.x-40)+'px',top:(props.y-50)+'px'}}/>
	// return <img src={ cat } alt='猫'/>
}
ReactDOM.render(<Mouse move={(mouse)=>{return <Cat x={mouse.x} y={mouse.y} />}} />, document.getElementById('root'));


