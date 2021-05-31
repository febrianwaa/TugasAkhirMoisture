import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Page/Home';
import Register from './src/Page/Register';
import Login from './src/Page/Login';
import MainMenu from './src/Page/MainMenu';

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainMenu" component={MainMenu}/>
          </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
