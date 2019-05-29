import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem'
import { KEY } from 'react-native-dotenv'
import factService from '../services/factService'
import { View, ScrollView } from 'react-native';

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
     {Object.values(data).map(c => <MenuItem key={c.data.name} text={c.data.name} />)}
     <MenuItem text="info" />
     <MenuItem text={`${KEY}`} />
    </ScrollView>
  )
}

export default Info





