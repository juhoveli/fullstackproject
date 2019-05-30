import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem'
import { KEY } from 'react-native-dotenv'
import factService from '../services/factService'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Route, Link } from 'react-router-native';
import Country from './Country'

const Info = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    factService.getAll().then(all =>
      setData(all.countries)
    )
  }, [])


  if (data.length < 1) {
    return (
      <View >
        <MenuItem text="fetching..." />
      </View>
        
    )
  }

  return (
    <ScrollView >
      {Object.values(data).map(c => 
        <Link key={c.data.name} to='/country'>
          <Text style={styles.text}>{c.data.name}</Text>
        </Link> 
      )}
      <Route path={'/country'} component={Country} />
    </ScrollView>
  )
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
  textTitle: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 56,
    textDecorationLine: 'underline',
    color: 'greenyellow',
    margin: 50
  }
});


export default Info





