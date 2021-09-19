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
    test('Should call navigation.navigate when i click backButton button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const backButton = getByTestId('backButton');
        fireEvent(backButton, 'press', navigation.navigate);
        expect(navigation.navigate).toHaveBeenCalled();
    })
    test('Should not call setEnd when i click previousPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const previousPage = getByTestId('previousPage');
        let setEnd = jest.fn()
        fireEvent(previousPage, 'press', setEnd);
        expect(setEnd).not.toHaveBeenCalled();
    })
    test('Should not call setEnd when i click nextPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const nextPage = getByTestId('nextPage');
        let setEnd = jest.fn()
        fireEvent(nextPage, 'press', setEnd);
        expect(setEnd).not.toHaveBeenCalled();
    })
})