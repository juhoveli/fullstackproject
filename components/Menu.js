import React, {useState} from 'react';
import MenuItem from './MenuItem'
import {
  Text, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const Menu = ({styles}) => {
  return (
    <View>
      <Text style={styles.textTitle}>iCOMMAND</Text>
      <MenuItem text="> login"/>
      <MenuItem text="> info"/>
      <MenuItem text="> exit"/>
    </View>
  )
}

export default Menu