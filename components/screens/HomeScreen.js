import React, {useState, useEffect} from 'react';
import {
  StyleSheet, StatusBar, ScrollView, SafeAreaView, ActivityIndicator,
  View, Text, Button
} from 'react-native';
import firebase from 'react-native-firebase'
import MenuButton from '../MenuButton'
import {DrawerActions} from 'react-navigation'
import MenuItem from '../MenuItem'

const HomeScreen = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const currentUser = firebase.auth().currentUser
    setCurrentUser(currentUser)
  }, [])

if (currentUser !== null) {
    return ( 
      <SafeAreaView style={styles.container}>
           <StatusBar hidden />
      <MenuItem text={`WELCOME ${currentUser.email}`} />
        <MenuButton
          text="> SEE INFO"
          onPress={() => navigation.navigate('Info')}
        />
      </SafeAreaView>
    );
  } else {
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
