import "react-native-gesture-handler";
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "../screens/Home";
import HamburgerMenu from "../screens/HamburgerMenu";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name = "HomeScreen" 
          component = {HomeScreen}
          options = {{
            headerShown : false
          }} 
        />
        <Stack.Screen 
          name = "HamburgerMenu" 
          component = {HamburgerMenu} 
          options = {{
            headerShown : false
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes;