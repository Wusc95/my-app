import {CHANGE_VAL,ADD_VAL,DEL_VAL,INIT_DATA} from './actionType'
let oDefaultState={
    aList:[],
    sTodo:''
}

let reducer = (state=oDefaultState,action)=>{
    // 接收一个修改数据的工单
    if(action.type === INIT_DATA){
        return action.value
    }

    if(action.type === CHANGE_VAL){
        let oNewState = JSON.parse(JSON.stringify(state))

        oNewState.sTodo = action.value;
        return oNewState;
    }

    if(action.type === ADD_VAL){
        let oNewState = JSON.parse(JSON.stringify(state))

        if(oNewState.sTodo.trim()===''){
            alert('请输入关键字')
            oNewState.sTodo=''
            return oNewState;
        }

        oNewState.aList.unshift(oNewState.sTodo.trim())
        oNewState.sTodo=''
        return oNewState;
    }

    if(action.type === DEL_VAL){
        let oNewState = JSON.parse(JSON.stringify(state))
        oNewState.aList.splice(action.value,1)

        return oNewState;
    }
    return state;
}

export default reducer;