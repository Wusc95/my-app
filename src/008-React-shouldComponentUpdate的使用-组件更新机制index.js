import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iNum: 10
        }
    }
    fnAdd = () => {
        this.setState({ iNum: Math.floor(Math.random() * 2) })
    }
    render() {
        console.log('-----Fatherrender--------')

        return (
            <div>
                <p>{this.state.iNum}</p>
                <input type='button' value='获取iNum的值' onClick={this.fnAdd} />
                <Son iNum={this.state.iNum}/>
            </div>
        )
    }
}

class Son extends Component {
    shouldComponentUpdate(nextProps) {
        console.log(this.props.iNum, nextProps.iNum);
        return this.props.iNum !== nextProps.iNum
    }
    render() {
        console.log('-----Sonrender--------')
        return (
            <p>这是子组件</p>
        )
    }
}

ReactDOM.render(<Father />, document.getElementById('root'));


