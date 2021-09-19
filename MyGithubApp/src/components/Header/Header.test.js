import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import Header from './Header';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('When invoked a Header component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        user : [{
            login: 'Pepe'
        },
        {
            login: 'Juanito' 
        }]
    })
    let route;
    let navigation;
    beforeEach(() => {
        jest.spyOn(actions, 'searchUser').mockReturnValueOnce({ type: actionTypes.GET_USERS });
        dispatch = jest.fn();
    })
    test('Should render the header page', () => {
        const header = render(<Provider store={store}><Header /></Provider>)
        expect(header).toMatchSnapshot()
    })
    test('Should search and user when i write in input', async () => {
        const { getByTestId } = render(<Provider store={store}><Header /></Provider>);
        const searchInput = getByTestId('searchInput');
        const userSearched = jest.fn();
        await fireEvent.changeText(searchInput, userSearched);
        expect(actions.searchUser).toHaveBeenCalled();
    })
})
