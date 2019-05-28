import React from 'react';
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
      <TouchableOpacity onPress={() => Alert.alert('JIHA', 'JOHO')}>
        <Text style={styles.textClickable}>ALERT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (console.log('testi'))}>
        <Text style={styles.textClickable}>MENU ITEM 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate()}>
        <Text style={styles.textClickable}>VIBRATE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu