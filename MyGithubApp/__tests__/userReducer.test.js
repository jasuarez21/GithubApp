import actionTypes from "../src/redux/actions/actionTypes";
import userReducer from "../src/redux/reducers/userReducer";

describe('When invoked a userReducer func', () => {
    test('Should return an array', () => {
        const action = {
            type: actionTypes.GET_USERS,
            data: [{
                user: 'login_name'
            }] 
        }
        const user = []
        const result = userReducer(user, action);
        expect(result).toEqual([{
            user: 'login_name'
        }]  )
    })
    test('Should return an empty array with no actiontype', () => {
        const action = {
            type: 'Other type',
            data: [{
                user: 'login_name'
            }] 
        }
        const user = []
        const result = userReducer(user, action);
        expect(result).toEqual(user)
    })
})