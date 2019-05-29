import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem'
import { KEY } from 'react-native-dotenv'
import factService from '../services/factService'
import {
  Text, 
  TouchableOpacity, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const Info = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    factService.getAll().then(facts =>
      setData(facts.value.joke)
    )
  }, [])


  if (data.length < 1 || data === undefined) {
    return (
      <View >
      <MenuItem text="fetching..." />
           <MenuItem text="info" />
           <MenuItem text={`${KEY}`} />
          </View>
        
    )
  }



   
  return (
    <View >
<MenuItem text={data} />
     <MenuItem text="info" />
     <MenuItem text={`${KEY}`} />
    </View>
  )
}

export default Info





