import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ListOfUsers from './ListOfUsers';

describe('When invoked a ListOfUsers component', () => {
    const mockStore = ConfigureStore();
    const store = mockStore({
        user : [{
            login: 'Josep'
        },
        {
            login: 'Juanito' 
        }]
    })
    let route;
    let navigation;
    beforeEach(() => {
        navigation = {
            navigate: jest.fn()
        }
        route = {
            params: {
                userSelected : 'Josep'
            }
        }
    })
    test('Should render the List of Users page', () => {
        const list = render(<Provider store={store}><ListOfUsers navigation={navigation} route={route} /></Provider>)
        expect(list).toMatchSnapshot()
    })
    test('Should navigate to detail of user when i click a target', async () => {
        const { getByTestId } = render(<Provider store={store}><ListOfUsers navigation={navigation} route={route} /></Provider>);
        const detailUser = getByTestId('Josep');
        await fireEvent.press(detailUser);
        expect(navigation.navigate).toHaveBeenCalled();
    })
})