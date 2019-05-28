import React, {useState} from 'react';
import {
  Text, 
  TouchableOpacity, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const Menu = ({styles}) => {
  return (
    <View>
      <Text style={styles.textTitle}>iCOMMAND</Text>
      <TouchableOpacity onPress={() => Alert.alert('JIHA', 'JOHO')}>
        <Text style={styles.textClickable}>> login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate()}>
        <Text style={styles.textClickable}>> register</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textClickable}>> info</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu