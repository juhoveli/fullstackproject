import React, {useState} from 'react';
import {
  StyleSheet, StatusBar,
  View, Text, Button
} from 'react-native';
import Menu from './components/Menu'
import Info from './components/Info'
import Users from './components/Users'
import MenuButton from './components/MenuButton'
import Country from './components/Country'
import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {     
      borderBottomColor: 'greenyellow',
      borderBottomStyle: 'dashed',
      backgroundColor: 'black',
    },
    headerTitleStyle: {
      color: 'greenyellow',
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 32
    }
  };
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Text>Home Screen</Text>
        <MenuButton
          text="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 36,
    textAlign: 'left',
    color: 'greenyellow',
    margin: 5,
    marginBottom: 5,
    paddingBottom: 0,
  },
  navigationBottom: {
    zIndex: 9999,
    backgroundColor: 'black',
    borderTopWidth: 2,
    borderColor: 'greenyellow',
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  textTitle: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 56,
    textDecorationLine: 'underline',
    color: 'greenyellow',
    margin: 50
  }
});

class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'INFO',
    headerStyle: {     
      backgroundColor: 'black'
    },
    headerTitleStyle: {
      color: 'greenyellow',
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 32
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Info Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: InfoScreen
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);