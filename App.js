import InfoScreen from './components/InfoScreen'
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import AuthScreen from './components/AuthScreen'
import React from 'react'
import TextInput from 'react-navigation'
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";


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

const CountryStack = createStackNavigator({
  Info: {screen: InfoScreen, navigationOptions: {...navigationOptions, title: 'INFO'}},
  Detail: {screen: DetailScreen, navigationOptions: {...navigationOptions, title: 'DETAILS'}},
})

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {...navigationOptions, title: 'HOME'}},
})

const AppStack = createBottomTabNavigator({
  App: HomeStack,
  Countries: CountryStack
})

const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen, navigationOptions: {...navigationOptions, title: 'LOGIN'}},
  Register: {screen: RegisterScreen, navigationOptions: {...navigationOptions, title: 'REGISTER'}},
})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: {screen: AuthScreen, navigationOptions: {...navigationOptions, title: 'LOADING'}},
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
))