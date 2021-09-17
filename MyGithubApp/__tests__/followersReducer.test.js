import followersReducer from "../src/redux/reducers/followersReducer";
import actionTypes from "../src/redux/actions/actionTypes";

describe('When invoked a followersReducer func', () => {
    test('Should return an array', () => {
        const action = {
            type: actionTypes.GET_FOLLOWERS,
            data: [{
                follower: 'name'
            }] 
        }
        const followers = []
        const result = followersReducer(followers, action);
        expect(result).toEqual([{
            follower: 'name'
        }] )
    })
    test('Should return an empty array with no actiontype', () => {
        const action = {
            type: 'Other type',
            data: [{
                follower: 'name'
            }] 
        }
        const followers = []
        const result = followersReducer(followers, action);
        expect(result).toEqual(followers)
    })
})