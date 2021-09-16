import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Header from './src/components/Header/Header';
import ListOfUsers from './src/components/ListOfUsers/ListOfUsers';
import UserDetail from './src/components/UserDetail/UserDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
} from 'react-native';

const Stack = createStackNavigator();

const App= () => {
  return (
    <Provider store={store([])} >
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ListOfUsers">
          <Stack.Screen name="ListOfUsers" component={ListOfUsers} />
          <Stack.Screen name="DetailOfUser" component={UserDetail} />
          {/* <ListOfUsers navigation={undefined} route={undefined} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#caf0f8'
  }
});

export default App;
