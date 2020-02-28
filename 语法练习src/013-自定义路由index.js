import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import './style/main.css'
function Page01() {
    return (
        <h1>页面内容一</h1>
    )
}
function Page02() {
    return (
        <h1>页面内容二</h1>
    )
}
function Page03() {
    return (
        <ul>
            <Link to='/page04/001'>课程1</Link>
            <Link to='/page04/002'>课程2</Link>
            <Link to='/page04/003'>课程3</Link>
        </ul>
    )
}
function Page04(props) {
    return (
        <h1>课程详情页,课程id:{props.match.params.courseId}</h1>
    )
}
function NotFound() {
    return (
        <h1>抱歉。页面未找到</h1>
    )
}
class App extends Component {
    render() {
        return (
            <HashRouter>
                {/* 
                <Link to="/">页面一</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page02">页面二</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page03">页面三</Link> 
                */}
            <CustomLink label='页面一' to='/page01' />
            <CustomLink label='页面二' to='/page02' />
            <CustomLink label='页面三' to='/page03' />
                <hr />
                <Switch>
                    <Route path="/page01" component={Page01}></Route>
                    <Route path="/page02" component={Page02}></Route>
                    <Route path="/page03" component={Page03}></Route>
                    <Route path="/page04/:courseId" component={Page04}></Route>

                    <Redirect from='/' to='/page01' />
                    <Route component={NotFound}></Route>

                </Switch>
            </HashRouter>
        )
    }
}
function CustomLink({ label, to, exact }) {
    return (
        <Route
            path={to}
            exact={exact}
            // match参数是系统传入的，它是一个布尔值，匹配当前路由，就是true
            // 不匹配当前路由，就是false
            children={({ match }) => (
                <Link to={to} className={match ? 'active' : ''}>{label}</Link>
            )}
        />)
}
ReactDOM.render(<App />, document.getElementById('root'));


