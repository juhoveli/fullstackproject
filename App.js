import React, {useState} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import Menu from './components/Menu'
import Info from './components/Info'

const App = () => {
  const [page, setPage] = useState('menu')

 const  toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    if (page === 'menu') {
      return <Menu styles={styles} />
    } else if (page === 'info') {
      return <Info styles={styles} />
    }}

    return (
      <View style={styles.container}>
        {content()}
        <View style={styles.navigation}>
          <TouchableOpacity  style={styles.textClickable} onPress={toPage('menu')}>
            <Text style={styles.textClickable}>MENU</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.textClickable} onPress={toPage('info')}>
            <Text style={styles.textClickable}>INFO</Text>
          </TouchableOpacity >
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  navigation: {
    borderWidth: 1,
    borderColor: 'greenyellow',
    position: 'absolute',
    bottom:0,
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
  },
  textClickable: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 36,
    textAlign: 'left',
    color: 'greenyellow',
    margin: 10
  }
});

export default App
