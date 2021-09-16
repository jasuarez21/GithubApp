import actionTypes from "../actions/actionTypes"


function followersReducer(followers: any = [], action: any){
    if(action.type === actionTypes.GET_FOLLOWERS){
        return action.data
    }else {
        return followers
    }
}

export default followersReducer