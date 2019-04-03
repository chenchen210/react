import {ADD_TODO_ITEM} from '../actions/ActionTypes';
let initValue = {
    list:[1,2,3]
}
export default (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(action.value);
            return newState;
        default :
            return state;
    }
}
