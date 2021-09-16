import actionTypes from "../actions/actionTypes"


function userReducer(user: any = [], action: any){
    if(action.type === actionTypes.GET_USER){
        return [...user, action.data]
    }else {
        return user
    }
}

export default userReducer