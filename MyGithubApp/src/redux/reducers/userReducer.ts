import actionTypes from "../actions/actionTypes"


function userReducer(user: any = [], action: any){
    if(action.type === actionTypes.GET_USERS){
        return action.data
    }else {
        return user
    }
}

export default userReducer