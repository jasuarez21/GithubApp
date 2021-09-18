import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import UserDetail from './UserDetail'
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a UserDetail component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        followers: [{
            name: 'Maria'
        }],
        repos: [{
            name: 'GitHubApp'
        }]
    })
    let route;
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'getFollowers').mockReturnValueOnce({ type: '' })
        jest.spyOn(actions, 'getRepos').mockReturnValueOnce({ type: '' })
        navigation = {
            navigate: jest.fn()
        }
        route = {
            params: {
                userSelected : 'Josep'
            }
        }
    })
    test('Should render the UserDetail page', () => {
        const list = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>)
        expect(list).toMatchSnapshot()
    })
})