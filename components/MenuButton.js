import React from 'react'
import {
  Text, 
  TouchableOpacity, 
  View, 
  Alert,
  Vibration
} from 'react-native';

const MenuButton = ({text, onPress}) => {

const style = {
  fontFamily: 'Glass_TTY_VT220',
  fontSize: 36,
  textAlign: 'left',
  color: 'greenyellow',
  margin: 5,
  marginBottom: 5,
  paddingBottom: 0,
}

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MenuButton

