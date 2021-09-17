import actionTypes from "../src/redux/actions/actionTypes";
import reposReducer from "../src/redux/reducers/reposReducer";

describe('When invoked a reposReducer func', () => {
    test('Should return an array', () => {
        const action = {
            type: actionTypes.GET_REPOS,
            data: [{
                repos: 'repo_name'
            }] 
        }
        const repos = []
        const result = reposReducer(repos, action);
        expect(result).toEqual([{
            repos: 'repo_name'
        }] )
    })
    test('Should return an empty array with no actiontype', () => {
        const action = {
            type: 'Other type',
            data: [{
                repos: 'repo_name'
            }] 
        }
        const repos = []
        const result = reposReducer(repos, action);
        expect(result).toEqual(repos)
    })
})