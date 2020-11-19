import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cameras from './pages/Camera';
import Login from './pages/Login';
import Home from './pages/Home';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Autenticado = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camera" component={Cameras} />
      </Drawer.Navigator>
    )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Logar'>
        <Stack.Screen name="Logar" component={Login} /> 
        <Stack.Screen name="Autenticar" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
