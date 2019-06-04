import React, {useState, useEffect} from 'react';
import MenuItem from '../MenuItem'
import factService from '../../services/factService'
import firebase from 'react-native-firebase'
import { StyleSheet, ActivityIndicator, StatusBar, Text, SafeAreaView, View, ScrollView } from 'react-native';


const InfoScreen = ({navigation}) => {
  var countries = firebase.database().ref('countries').limitToFirst(10)
  const [data, setData] = useState([])
  
  useEffect(() => {
    countries.once('value', snap => {
      const countryObjects = []
      snap.forEach((child) => {
        console.log(child.key, child.val())
        countryObjects.push({
          name: child.key,
          data: child.val().data
        })
      })
      setData(countryObjects)
      console.log(countryObjects)
    });
  }, [])

  if (!data  || data.length < 1) {
    return (
      <SafeAreaView style={styles.container}>
           <StatusBar hidden />
        <ActivityIndicator
          color='greenyellow'
          size='large'
        />
      </SafeAreaView>
        
    )
  }

    return (
      <ScrollView 
      style={styles.scroll}>
           <StatusBar hidden />
           {data.map(c => 
           
      <SafeAreaView  key={c.name} >
          <MenuItem text={`> ${c.name}`} 
                    style={styles.text} 
                    onPress={() => 
                    navigation.navigate('Detail', {
                      country: c.data
                    })}
            />
      </SafeAreaView>
      )}
    </ScrollView>
    );
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
  
  export default InfoScreen

  /**
   *      
   */