import React from 'react';
import {
  StyleSheet, StatusBar,
  View, Text, Button
} from 'react-native';
import MenuItem from '../MenuItem'

const SavedScreen = ({navigation}) => {
    return ( 
      <View style={styles.container}>
           <StatusBar hidden />
      <MenuItem text='Should display saved countries etc. here' />
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
      padding: 50,
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

  export default SavedScreen