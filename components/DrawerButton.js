import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

const DrawerButton = ({ navigation }) => (

  <Icon name="ios-menu"
      style={{paddingLeft: 20}}
       color="greenyellow" 
       size={40}
       onPress={() => navigation.openDrawer()}
       />
);

export default DrawerButton;