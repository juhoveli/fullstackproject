import InfoScreen from './components/screens/InfoScreen'
import HomeScreen from './components/screens/HomeScreen'
import DetailScreen from './components/screens/DetailScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import AuthScreen from './components/screens/AuthScreen'
import UserScreen from './components/screens/UserScreen'
import CustomDrawer from './components/screens/CustomDrawer'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import DrawerButton from './components/DrawerButton';
import {View, SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native'
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import MenuButton from './components/MenuButton';


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
  headerLeft: <Icon name="ios-menu"
   color="greenyellow" 
   size={40}
   />,

}

const CountryStack = createStackNavigator({
  Info: {screen: InfoScreen, navigationOptions: {...navigationOptions, title: 'INFO'}},
  Detail: {screen: DetailScreen, navigationOptions: {
    ...navigationOptions, 
    title: 'DETAILS', 
    headerTintColor: 'greenyellow',
    headerBackTitleStyle: {
    color: 'greenyellow',
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 32,
    backgroundColor: 'black'
  },}},
})

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {...navigationOptions, title: 'HOME'}},
})

const UserStack = createStackNavigator({
  User: {screen: UserScreen, navigationOptions: {...navigationOptions, title: 'USER'}},
})

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Countries: CountryStack,
  User: UserStack
  },
  {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const {routeName} = navigation.state
      let iconName
      if (routeName === 'Home') iconName = 'ios-home'
      if (routeName === 'Countries') iconName = 'ios-search'
      if (routeName === 'User') iconName = 'ios-bookmark'
      return (
        <Icon
          name={iconName}
          color={tintColor}
          size={40} 
        />
      )
    }
  }),
  lazy: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'greenyellow',
    inactiveTintColor: 'darkolivegreen',
    labelStyle: {
    fontSize: 32,
    fontFamily: 'Glass_TTY_VT220',
  },
  style: {
    backgroundColor: 'black',
    borderTopColor: 'greenyellow'
  },
  }, 
})

const Drawer = createDrawerNavigator({
  Tabs: {
    screen: AppStack
  }
}, {
  contentComponent: CustomDrawer
},
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
},
{
defaultNavigationOptions: ({navigation}) => ({
  title: navigation.state.routeName.toUpperCase(),
  headerStyle: {     
    borderBottomColor: 'greenyellow',
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    color: 'greenyellow',
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 32
  },
  headerTintColor: 'greenyellow',
  headerBackTitleStyle: {
  color: 'greenyellow',
  fontFamily: 'Glass_TTY_VT220',
  fontSize: 32,
  backgroundColor: 'black'
}
})})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: {screen: AuthScreen, navigationOptions: {...navigationOptions, title: 'LOADING'}},
    App: Drawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  },
))