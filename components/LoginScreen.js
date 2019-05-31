import React, {useState, useEffect} from 'react';
import {
  StyleSheet, StatusBar, ScrollView,
  View, Text, Button
} from 'react-native';
import MenuButton from './MenuButton'
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
      <StatusBar hidden />
      <TextInput 
      textContentType='username'
      style={styles.textInput}
      placeholderTextColor='darkolivegreen'
      placeholder='username'
      clearTextOnFocus={true}
      keyboardAppearance='dark'/>
      
      <TextInput 
      textContentType='password'
      style={styles.textInput}
      placeholder='password'
      placeholderTextColor='darkolivegreen'
      secureTextEntry={true}
       clearTextOnFocus={true}
       keyboardAppearance='dark'/>
      <MenuButton 
        text="login" 
        onPress={() => navigation.navigate('Home')}/>
      </View>
    );
  }



  const styles = StyleSheet.create({
    textInput: {
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 36,
      color: 'greenyellow',
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: 'greenyellow',
      padding: 10,
      margin: 5
    },
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
      alignItems: 'stretch',
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

  export default LoginScreen