import { combineReducers } from "redux"


const userData = {
    id:0,
    username:"",
    email:"",
    password:"",
    isLogin:false,
    dataUser:{}
}

const plantsData = {
    id:0,
    name:"",
    humidity:0,
    temp:0,
    water:false,
    dataPlants:{}
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

function PlantsReducer(state=plantsData,action){
    if(action.type==="SET_PLANTS"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}


const reducer = combineReducers({
    UserReducer,
    PlantsReducer
})

export default reducer