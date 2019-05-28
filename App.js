import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{count}</Text>
        <TouchableHighlight onPress={() => setCount(count + 1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pos</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setCount(count - 1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Neg</Text>
          </View>
        </TouchableHighlight>
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
  welcome: {
    fontSize: 48,
    textAlign: 'center',
    color: 'greenyellow',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'greenyellow',
    padding: 10,
    margin: 5,
    borderRadius: 20

  },
  buttonText: {
    color: 'black'
  }
});

export default App
