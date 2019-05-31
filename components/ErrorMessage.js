import React from 'react'
import {
  Text
} from 'react-native';

const ErrorMessage = ({text}) => {

const style = {
  fontFamily: 'Glass_TTY_VT220',
  fontSize: 24,
  color: 'tomato',
  margin: 5,
  position: 'absolute',
  top: 0,
  marginTop: 10,
}

  return (
      <Text style={style}>{text}</Text>
  )
}

export default ErrorMessage

