import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, SearchBar, Text, View, ScrollView } from 'react-native';
import MenuItem from './MenuItem'

const DetailScreen = ({navigation}) => {
    const country = navigation.getParam('country', 'finland')

    return (
      <ScrollView style={styles.scroll}>
           <StatusBar hidden />
      <View  key={country.introduction.background} >
          <Text 
            style={styles.detail}>
            {country.introduction.background}
          </Text>
      </View>
    </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    detail: {
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 24,
      textAlign: 'center',
      color: 'greenyellow',
      margin: 10,
      padding: 10
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
  
  export default DetailScreen