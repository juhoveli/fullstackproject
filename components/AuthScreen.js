import React, {useEffect} from 'react'
import firebase from 'react-native-firebase'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
const AuthScreen = ({navigation}) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'Home' : 'Register')
    })
  }, [])

    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AuthScreen