import InfoScreen from './components/screens/InfoScreen'
import HomeScreen from './components/screens/HomeScreen'
import DetailScreen from './components/screens/DetailScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import AuthScreen from './components/screens/AuthScreen'
import SavedScreen from './components/screens/SavedScreen'
import DrawerScreen from './components/screens/DrawerScreen'
import DrawerButton from './components/DrawerButton'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";


const CountryStack = createStackNavigator({
  Info: {screen: InfoScreen, 
    navigationOptions: ({navigation}) =>({
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
      headerLeft: <DrawerButton navigation={navigation}/>,
    }) },
  Detail: {screen: DetailScreen, 
    navigationOptions: ({navigation}) =>({
      title: navigation.getParam('country', 'placeholder').name,
      headerStyle: {     
        borderBottomColor: 'greenyellow',
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'greenyellow',
        fontFamily: 'Glass_TTY_VT220',
        fontSize: 24
      }, 
      headerTintColor: 'greenyellow',
      headerBackTitleStyle: {
      color: 'greenyellow',
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 24,
      backgroundColor: 'black'
}
    }) },
})

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen, 
    navigationOptions: ({navigation}) =>({
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
      headerLeft: <DrawerButton navigation={navigation}/>,
  }) 
}})

const SavedStack = createStackNavigator({
  Saved: {screen: SavedScreen, 
    navigationOptions: ({navigation}) =>({
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
      headerLeft: <DrawerButton navigation={navigation}/>,
  }) 
}})

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Countries: CountryStack,
  Saved: SavedStack
  },
  {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const {routeName} = navigation.state
      let iconName
      if (routeName === 'Home') iconName = 'ios-home'
      if (routeName === 'Countries') iconName = 'ios-search'
      if (routeName === 'Saved') iconName = 'ios-bookmark'
      return (
        <Icon
          name={iconName}
          color={tintColor}
          size={40} 
        />
      )
    }
  }),
  lazy: true,
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
  contentComponent: DrawerScreen,
  drawerWidth: 300
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
    AuthLoading: AuthScreen,
    App: Drawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  },
))