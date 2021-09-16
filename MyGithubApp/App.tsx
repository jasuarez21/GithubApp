import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Header from './src/components/Header/Header'
import ListOfUsers from './src/components/ListOfUsers/ListOfUsers'
import {
  StyleSheet,
} from 'react-native';

const App= () => {
  return (
    <Provider store={store([])}>
      <Header navigation={undefined} route={undefined} />
      <ListOfUsers navigation={undefined} route={undefined} />
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
