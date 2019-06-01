import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DrawerButton = ({ navigation }) => (

  <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
    <Text title="DRAW" style={{color: 'greenyellow'}} />
  </TouchableOpacity>
);

export default DrawerButton;