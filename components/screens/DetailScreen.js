import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, SearchBar, Text, SafeAreaView, ScrollView } from 'react-native';
import MenuItem from '../MenuItem'

const DetailScreen = ({navigation}) => {
    const country = navigation.getParam('country', 'finland')
    console.log(country)

    return (
      <ScrollView style={styles.scroll}>
           <StatusBar hidden />
{Object.keys(country).map(c => 
  <SafeAreaView  key={c} >
      <Text
                style={styles.detail} 
                onPress={() => 
                navigation.navigate('Detail', {
                  country: c.data
                })}
        >{`> ${c}`} </Text>
  </SafeAreaView>
  )}

    </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    detail: {
      fontFamily: 'Glass_TTY_VT220',
      fontSize: 36,
      textAlign: 'left',
      color: 'greenyellow',
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