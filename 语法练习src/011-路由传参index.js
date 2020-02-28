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
function NotFound(){
    return (
        <h1>抱歉。页面未找到</h1>
    )
}
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Link to="/">页面一</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page02">页面二</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page03">页面三</Link>
                <hr />
                <Switch>
                    <Route exact path="/page01" component={Page01}></Route>
                    <Route path="/page02" component={Page02}></Route>
                    <Route path="/page03" component={Page03}></Route>
                    <Route path="/page04/:courseId" component={Page04}></Route>

                    <Redirect exact from='/' to='/page01'/>
                    <Route component={NotFound}></Route>

                </Switch>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


