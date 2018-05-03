import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';

const ExternalLink = ({to, navigation, children}) => (
    <Text onPress={() => Linking.openURL(to)} style={{color: '#0000ff'}}>{children}</Text>
);

export default withNavigation(ExternalLink);