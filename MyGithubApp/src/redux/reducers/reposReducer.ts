import { Action } from "../../interfaces/Action"
import actionTypes from "../actions/actionTypes"


function reposReducer(repos: any = [], action: Action){
    if(action.type === actionTypes.GET_REPOS){
        return action.data
    }else {
        return repos
    }
}

export default reposReducer