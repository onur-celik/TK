import "react-native-gesture-handler";
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import HomeScreen from "../screens/Home";
import HamburgerMenu from "../screens/HamburgerMenu";


const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={()=><HamburgerMenu></HamburgerMenu>}
        screenOptions = {{
          drawerStyle : {
            width : "100%"
          }
        }}
      >
        <Drawer.Screen
          name = "Home"
          component = {HomeScreen}
          screenOptions= {{
            drawerType : "front"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default Routes;