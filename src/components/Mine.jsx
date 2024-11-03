import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../styles/colors';

export default props => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 9999 }}>
      <FontAwesome5 name="bomb" size={15} color={Colors.lightAfricanViolet} solid />
    </View>
  );
};
