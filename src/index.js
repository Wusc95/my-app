import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// 导入react-redux
import { Provider } from 'react-redux'
import store from './store/index'
// 导入app组件
import App from './app'

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));


