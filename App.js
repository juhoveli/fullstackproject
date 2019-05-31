import InfoScreen from './components/InfoScreen'
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import LoginScreen from './components/LoginScreen'
import React from 'react'
import TextInput from 'react-navigation'
import { createStackNavigator, createAppContainer } from "react-navigation";


const navigationOptions = {
  title: 'placeholder',
  headerStyle: {     
    borderBottomColor: 'greenyellow',
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    color: 'greenyellow',
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 32
  },
  headerBackTitle: '<',
  headerTintColor: 'black',
  headerBackTitleStyle: {
    color: 'greenyellow',
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 32,
    backgroundColor: 'black'
  },
}

const AppNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen, navigationOptions: {...navigationOptions, title: 'LOGIN'}},
    Home: {screen: HomeScreen, navigationOptions: {...navigationOptions, title: 'HOME'}},
    Info: {screen: InfoScreen, navigationOptions: {...navigationOptions, title: 'INFO'}},
    Detail: {screen: DetailScreen, navigationOptions: {...navigationOptions, title: 'DETAILS'}},
  },
  {
    initialRouteName: "Login"
  },
);


export default createAppContainer(AppNavigator);