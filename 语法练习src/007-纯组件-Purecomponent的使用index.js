import React, { Component,PureComponent } from 'react';
import ReactDOM from 'react-dom';
class Father extends Component{
	constructor(props){
        super(props)
        this.state={
            iNum:10
        }
    }
    fnAdd=()=>{
        this.setState((state)=>{
            return {
                iNum:state.iNum+1
            }
        })
    }
    render(){
        console.log('-----Fatherrender--------')

        return (
            <div>
                <p>{this.state.iNum}</p>
                <input type='button' value='递增' onClick={this.fnAdd} />
                <Son />
            </div>
        )
    }
}

class Son extends PureComponent{
    render(){
        console.log('-----Sonrender--------')
        return (
            <p>这是子组件</p>
        )
    }
}

ReactDOM.render(<Father  />, document.getElementById('root'));


