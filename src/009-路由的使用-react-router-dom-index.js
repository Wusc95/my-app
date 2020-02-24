import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom'
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
        <h1>页面内容三</h1>
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
                <Route exact path="/" component={Page01}></Route>
                <Route path="/page02" component={Page02}></Route>
                <Route path="/page03" component={Page03}></Route>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


