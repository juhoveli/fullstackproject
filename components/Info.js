import React, {useState} from 'react';
import MenuItem from './MenuItem'
import { KEY } from 'react-native-dotenv'
import {
  Text, 
  TouchableOpacity, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const Info = () => {
  return (
    <View >
     <MenuItem text="info" />
     <MenuItem text={`${KEY}`} />
    </View>
  )
}

export default Info





