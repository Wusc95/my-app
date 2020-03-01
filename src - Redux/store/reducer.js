
let reducer = (state = [], action) => {
    if (action.type === 'add_goods') {

        let oNewState = JSON.parse(JSON.stringify(state))
        // 判断是否添加重复的商品
        let FindGoods = oNewState.find((item) => { return item.id === action.value.id })
        if (FindGoods) {
            FindGoods.num += 1;
            return oNewState;
        }


        oNewState.unshift(action.value)
        return oNewState;
    }

    if (action.type === 'change_num') {
        let oNewState = JSON.parse(JSON.stringify(state))
        let good = oNewState.find((item) => {
            return item.id === action.GoodId
        })

        good.num = action.value
        return oNewState

    }

    if (action.type === 'del_val') {
        let oNewState = JSON.parse(JSON.stringify(state))

        let good = oNewState.filter((item) => {
            return item.id !== action.id
        })

        return good

    }
}

export default reducer;