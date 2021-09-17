import axios from 'axios';
import actionTypes from './actionTypes';
import {Dispatch} from 'redux';

export function searchUser(user: string){
    return async (dispatch: Dispatch) => {
        try {
            const {data} = await axios.get('https://api.github.com/users')
            const searchedUser: [] = data.filter((elem: any) => elem.login.includes(user))
            dispatch({
                type: actionTypes.GET_USERS,
                data: searchedUser,
            })
        } catch (error) {
            dispatch({
                type: actionTypes.ERROR
            })
        }
    }
}

export function getFollowers(url: string){
    return async (dispatch: Dispatch) => {
        try {
            const {data} = await axios.get(url)
            dispatch({
                type: actionTypes.GET_FOLLOWERS,
                data,
            })
        } catch (error) {
            dispatch({
                type: actionTypes.ERROR
            })
        }
    }
}

export function getRepos(url: string){
    return async (dispatch: Dispatch) => {
        try {
            const {data} = await axios.get(url)
            dispatch({
                type: actionTypes.GET_REPOS,
                data,
            })
        } catch (error) {
            dispatch({
                type: actionTypes.ERROR
            })
        }
    }
}