let oDefaultState={
    aList:['学习html','学习css','学习javascript'],
    sTodo:''
}

let reducer = (state=oDefaultState,action)=>{
    // 接收一个修改数据的工单
    if(action.type === 'change_val'){
        let oNewState = JSON.parse(JSON.stringify(state))

        oNewState.sTodo = action.value;
        return oNewState;
    }

    if(action.type === 'add_val'){
        let oNewState = JSON.parse(JSON.stringify(state))
        oNewState.aList.unshift(oNewState.sTodo)
        oNewState.sTodo=''
        return oNewState;
    }

    if(action.type === 'del_val'){
        let oNewState = JSON.parse(JSON.stringify(state))
        oNewState.aList.splice(action.value,1)

        return oNewState;
    }
    return state;
}

export default reducer;