import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, SearchBar, Text, SafeAreaView, ScrollView } from 'react-native';
import MenuItem from '../MenuItem'

const DetailScreen = ({navigation}) => {
    const country = navigation.getParam('country', 'finland')
    console.log(country)
    if (!country.government.capital) country.government.capital = {name: 'no data'}
    if (!country.people) country.people = {population: {total: 'no data'}}

    return (
      <ScrollView style={styles.scroll}>
        <StatusBar hidden />
        <MenuItem text={`- capital: ${country.government.capital.name || 'none'}`} />
        <MenuItem text={`- population: ${country.people.population.total}`} />
        <MenuItem text={`- area: ${country.geography.area.total.value} sq km`} />
        <MenuItem text={`> background`}/>
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