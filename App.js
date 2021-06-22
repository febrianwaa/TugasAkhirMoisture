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
import Glosarium from "./src/Page/Glosarium";

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
            <Stack.Screen name="Main Menu" component={MainMenu} options={{ headerShown: false }} />
            <Stack.Screen name="TambahkanTanaman" component={TambahkanTanaman} options={{ headerShown: false }}/>
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateUser" component={UpdateUser} options={{ headerShown: false }}/>
             <Stack.Screen name="ProfileTanaman" component={ProfileTanaman} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailTanaman" component={DetailTanaman} options={{ headerShown: false }}/>
           

          <Stack.Screen name="glosarium" component={Glosarium} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
