import React, {useState, useEffect} from 'react';
import {
  StyleSheet, StatusBar, ScrollView,
  View, Text, Button
} from 'react-native';
import Menu from './components/Menu'
import Info from './components/Info'
import Users from './components/Users'
import MenuButton from './components/MenuButton'
import MenuItem from './components/MenuItem'
import factService from './services/factService'
import Country from './components/Country'
import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Text>Home Screen</Text>
        <MenuButton
          text="> SEE INFO"
          onPress={() => this.props.navigation.navigate('Info')}
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
  scroll: {
    flex: 1,
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

InfoScreen = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    factService.getAll().then(all =>
      setData(all.countries)
    )
  }, [])

  if (data.length < 1) {
    return (
      <View style={styles.container}>
        <MenuItem text="LOADING..." />
      </View>
        
    )
  }

    return (
      <ScrollView style={styles.scroll}>
      {Object.values(data).map(c => 
      <View  key={c.data.name} >
          <Text style={styles.text}>> {c.data.name}</Text>
      </View>
      )}
    </ScrollView>
    );
  }


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