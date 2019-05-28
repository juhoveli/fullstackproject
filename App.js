import React, {useState} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';
import Menu from './components/Menu'

const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>APP ROOT</Text>
        <Menu styles={styles}/>
      </View>
    );
  }

const styles = StyleSheet.create({
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
  },
  textClickable: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 36,
    textAlign: 'center',
    color: 'greenyellow',
    margin: 20
  }
});

export default App
