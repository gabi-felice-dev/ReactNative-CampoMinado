import React from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../styles/colors';

export default ({ bigger }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontAwesome5 name="flag" size={bigger ? 50 : 35} color={Colors.darkUltraViolet} solid />
    </View>
  );
};
