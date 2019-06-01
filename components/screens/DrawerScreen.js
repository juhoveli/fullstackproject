import React, {useEffect, useState} from 'react'
import MenuButton from '../MenuButton'
import MenuItem from '../MenuItem'
import firebase from 'react-native-firebase'
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet, SafeAreaView , Text} from "react-native";

const DrawerScreen = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    setCurrentUser(currentUser)
  }, [])

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate('Login'))
  }

  if (currentUser===null) return null

  return (
    <SafeAreaView style={styles.container} >
      <MenuItem text={currentUser.email} />
      <MenuButton text="> LOGOUT" onPress={handleLogout} />
      <Icon
    name="ios-exit"
    color='greenyellow'
    size={40}/>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001100',
  }})


export default DrawerScreen