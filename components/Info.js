import React, {useState} from 'react';
import {
  Text, 
  TouchableOpacity, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const Info = ({styles}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Alert.alert('JIHA', 'JOHO')}>
        <Text style={styles.textClickable}>
          This is a very cool app indeed. How about
          you try what it's capable of..
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Info