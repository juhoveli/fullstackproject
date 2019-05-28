import React, {useState} from 'react';
import {StyleSheet, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ScrollView} from 'react-native';

const App = () => {
  const [notes, setNotes] = useState([1,2,3,4,5,6,7,8,9])


  const handleNoteChange = (event) => {
    setNotes(notes.concat(event.target))
  }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setNotes(notes.map(n=> n*2))}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Exp</Text>
          </View>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => setNotes(notes.map(n => n/2))}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log</Text>
          </View>
        </TouchableHighlight>
        <ScrollView>
          {notes.map(n => <Text 
                          key={n} 
                          style={styles.welcome}>
                          {n}
                          </Text>)}
        </ScrollView>
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
