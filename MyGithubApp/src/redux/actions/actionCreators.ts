import axios from 'axios';
import actionTypes from './actionTypes';
import {Dispatch} from 'redux';

export function getUsers(user: string){
    console.log(user)
    return async (dispatch: Dispatch) => {
        try{
            const {data} = await axios.get('the url')
            dispatch({
                type: actionTypes.GET_USER,
                data,
            })
        } catch (error) {
            dispatch({
                type: actionTypes.ERROR
            })
        }
    }
}