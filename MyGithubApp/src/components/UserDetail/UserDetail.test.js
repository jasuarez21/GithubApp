import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/actionCreators';
import { Provider } from 'react-redux';
import UserDetail from './UserDetail'

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
    test('Should not call setRepoEnd when i click previousPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const previousPage = getByTestId('previousRepoPage');
        let setRepoEnd = jest.fn()
        fireEvent(previousPage, 'press', setRepoEnd);
        expect(setRepoEnd).not.toHaveBeenCalled();
    })
    test('Should not call setRepoEnd when i click nextRepoPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const nextRepoPage = getByTestId('nextRepoPage');
        let setRepoEnd = jest.fn()
        fireEvent(nextRepoPage, 'press', setRepoEnd);
        expect(setRepoEnd).not.toHaveBeenCalled();
    })
    test('Should not call setFollowerEnd when i click nextFollowerPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const nextFollowerPage = getByTestId('nextFollowerPage');
        let setFollowerEnd = jest.fn()
        fireEvent(nextFollowerPage, 'press', setFollowerEnd);
        expect(setFollowerEnd).not.toHaveBeenCalled();
    })
    test('Should not call setRepoEnd when i click previousFollowerPage button',  () => {
        const { getByTestId } = render(<Provider store={store}><UserDetail navigation={navigation} route={route} /></Provider>);
        const previousFollowerPage = getByTestId('previousFollowerPage');
        let setFollowerEnd = jest.fn()
        fireEvent(previousFollowerPage, 'press', setFollowerEnd);
        expect(setFollowerEnd).not.toHaveBeenCalled();
    })
})