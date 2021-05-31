export function UserAction(inputType,inputValue){
    return {type:"SET_USER",inputType:inputType,inputValue:inputValue}
}

export function PlantsAction(inputType,inputValue){
    return {type:"SET_PLANTS",inputType:inputType,inputValue:inputValue}
}