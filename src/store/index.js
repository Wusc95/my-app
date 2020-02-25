import {createStore} from 'redux'

import reducer from './reducer.js'

// 创建一个仓库管理员,关联数据仓库(reducer)
let store = createStore(reducer);

export default store;