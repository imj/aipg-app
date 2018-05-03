import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const PageLink = ({to, navigation, children}) => (
    <Text onPress={() => navigation.navigate('Page', {id: to})} style={{color: '#0000ff'}}>{children}</Text>
);

export default withNavigation(PageLink);