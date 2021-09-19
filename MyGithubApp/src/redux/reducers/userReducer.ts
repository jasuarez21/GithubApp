import actionTypes from "../actions/actionTypes"
import { User } from "../../interfaces/User"
import { Action } from "../../interfaces/Action"


function userReducer(user: [] | [User] = [], action: Action){
    if(action.type === actionTypes.GET_USERS){
        return action.data
    }else {
        return user
    }
}

export default userReducer