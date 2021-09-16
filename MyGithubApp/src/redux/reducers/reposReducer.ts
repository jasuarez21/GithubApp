import actionTypes from "../actions/actionTypes"


function reposReducer(repos: any = [], action: any){
    if(action.type === actionTypes.GET_REPOS){
        return action.data
    }else {
        return repos
    }
}

export default reposReducer