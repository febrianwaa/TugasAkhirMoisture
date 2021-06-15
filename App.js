import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/Redux/Store";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Page/Home";
import Register from "./src/Page/Register";
import Login from "./src/Page/Login";
import MainMenu from "./src/Page/MainMenu";
import TambahkanTanaman from "./src/Page/TambahkanTanaman";
import ProfileTanaman from "./src/Page/ProfileTanaman";
import Setting from "./src/Page/Setting";
import UpdateUser from "./src/Page/UpdateUser";
import DetailTanaman from "./src/Page/DetailTanaman";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main Menu" component={MainMenu} />
            <Stack.Screen name="TambahkanTanaman" component={TambahkanTanaman} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="UpdateUser" component={UpdateUser} />
            <Stack.Screen name="DetailTanaman" component={DetailTanaman} />
            <Stack.Screen name="ProfileTanaman" component={ProfileTanaman} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
