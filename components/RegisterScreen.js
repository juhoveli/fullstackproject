import firebase from 'react-native-firebase'
import React, {useState, useEffect} from 'react'
import MenuButton from '../components/MenuButton'
import MenuItem from '../components/MenuItem'
import ErrorMessage from '../components/ErrorMessage'
import { StackActions, NavigationActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, StatusBar, ActivityIndicator, Button } from 'react-native'
const RegisterScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

handleSignUp = () => {
  setLoading(true)
  firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch(e => {
        setLoading(false)
        setErrorMessage(e.message)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  setEmail(''); setPassword('')
}

if (loading) return (
  <View style={styles.container}>
  <StatusBar hidden />
  <ActivityIndicator
        color='greenyellow'
        size='large'
      />
  </View>
)


    return (
      <View style={styles.container}>
              <ErrorMessage text={errorMessage} />
        <MenuItem text="CREATE NEW ACCOUNT"/>
      <TextInput 
        textContentType='emailAddress'
        style={styles.textInput}
        placeholderTextColor='darkolivegreen'
        placeholder='email'
        clearTextOnFocus={true}
        keyboardAppearance='dark'
        onChangeText={email => setEmail(email)}
        value={email}/>
      <TextInput 
        textContentType='password'
        style={styles.textInput}
        placeholder='password'
        placeholderTextColor='darkolivegreen'
        secureTextEntry={true}
        clearTextOnFocus={true}
        keyboardAppearance='dark'
        onChangeText={password => setPassword(password)}
        value={password}/>
      <MenuButton text="> REGISTER" onPress={this.handleSignUp} />
      </View>
    )
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


export default RegisterScreen