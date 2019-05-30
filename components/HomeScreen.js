import React, {useState, useEffect} from 'react';
import {
  StyleSheet, StatusBar, ScrollView,
  View, Text, Button
} from 'react-native';
import MenuButton from './MenuButton'

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

export default HomeScreen
