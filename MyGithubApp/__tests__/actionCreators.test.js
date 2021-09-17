import { searchUser, getFollowers, getRepos } from "../src/redux/actions/actionCreators";
import axios from 'axios';
import actionTypes from "../src/redux/actions/actionTypes";

jest.mock('axios')

describe('When invoked a searchUser function', () => {
    test('Should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce({login: 'username'})
        await searchUser()(dispatch);
        expect(dispatch).toHaveBeenCalled()
    })
    test('Should dispatch an ERROR in Promise', async () => {
        const dispatch = jest.fn();
        axios.get.mockRejectedValueOnce({login: 'username'})
        await searchUser()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.ERROR
        })
    })
})

describe('When invoked a getFollowers function', () => {
    test('Should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce([{followers: 'followersName'}])
        await getFollowers()(dispatch);
        expect(dispatch).toHaveBeenCalled()
    })
    test('Should dispatch an ERROR in Promise', async () => {
        const dispatch = jest.fn();
        axios.get.mockRejectedValueOnce({login: 'username'})
        await getFollowers()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.ERROR
        })
    })
})

describe('When invoked a getRepos function', () => {
    test('Should call a dispatch function', async () => {
        const dispatch = jest.fn();
        axios.get.mockResolvedValueOnce([{repos: 'reposName'}])
        await getRepos()(dispatch);
        expect(dispatch).toHaveBeenCalled()
    })
    test('Should dispatch an ERROR in Promise', async () => {
        const dispatch = jest.fn();
        axios.get.mockRejectedValueOnce({login: 'username'})
        await getRepos()(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.ERROR
        })
    })
})