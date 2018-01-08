import React from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';


const CardLink = (props) =>
    <Text onPress={() => props.navigation.navigate("CardModal", {card: props.card})}>
        {props.children || props.card}
    </Text>


export default withNavigation(CardLink);