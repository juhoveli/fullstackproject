import React, {useEffect} from 'react'
import firebase from 'react-native-firebase'
import MenuItem from '../MenuItem'
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native'
const AuthScreen = ({navigation}) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'App' : 'Auth')
    })
  }, [])

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ActivityIndicator
          color='greenyellow'
          size='large'
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#000000',
  },
})

export default AuthScreen