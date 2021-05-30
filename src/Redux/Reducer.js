import { combineReducers } from "redux"


const userData = {
    id:0,
    username:"",
    email:"",
    password:"",
    isLogin:false,
    dataUser:{}
}


function UserReducer(state=userData,action){
    if(action.type==="SET_USER"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}


const reducer = combineReducers({
    
    UserReducer,
    
})

export default reducer