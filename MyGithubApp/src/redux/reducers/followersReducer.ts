import actionTypes from "../actions/actionTypes"
import { User } from '../../interfaces/User'
import { Action } from "../../interfaces/Action"


function followersReducer(followers: [] | [User] = [], action: Action){
    if(action.type === actionTypes.GET_FOLLOWERS){
        return action.data
    }else {
        return followers
    }
}

export default followersReducer