import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import './style/main.css'

class App extends Component {
    render() {
        return (
            <HashRouter>
                    <Route exact path='/' component={Login}></Route>
                    <Route path='/main' component={Main}></Route>
            </HashRouter>
        )
    }
}

class Login extends Component {
    render() {
        return (
            <div>
                <h2>登录页</h2>
                <p>
                    <label>用户名:</label>
                    <input type='text' />
                </p>
                <p>
                    <label>密&nbsp;&nbsp;&nbsp;码:</label>
                    <input type='password' />
                </p>
                <input type='button' value='登陆' onClick={() => { this.props.history.push('/main') }} />
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className='menu'>
                    <ul>
                        <li><Link to='/main' >课程1</Link></li>
                        <li><Link to='/main/con02' >课程2</Link></li>
                        <li><Link to='/main/con03' >课程3</Link></li>
                    </ul>
                </div>
                <div className='content'>
                    <Route exact path='/main' component={con01}></Route>
                    <Route path='/main/con02' component={con02}></Route>
                    <Route path='/main/con03' component={con03}></Route>
                </div>
            </div>
        )
    }
}
function con01(){
    return (
        <p>aaaaaaaaaaaaaa01</p>
    )
}
function con02(){
    return (
        <p>aaaaaaaaaaaaaa02</p>
    )
}
function con03(){
    return (
        <p>aaaaaaaaaaaaaa03</p>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))