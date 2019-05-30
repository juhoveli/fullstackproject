import InfoScreen from './components/InfoScreen'
import HomeScreen from './components/HomeScreen'
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
  }
};

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen, navigationOptions: {...navigationOptions, title: 'HOME'}},
    Info: {screen: InfoScreen, navigationOptions: {...navigationOptions, title: 'INFO'}}
  },
  {
    initialRouteName: "Home"
  },
);


export default createAppContainer(AppNavigator);