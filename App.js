/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

// onur
import Routes from './src/navigation/Routes';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// onur / x
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

const App: () => Node = () => {
  return (
    <Routes></Routes>
  );
};

export default App;
