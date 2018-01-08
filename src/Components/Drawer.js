import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Indicies from '../data';


export default (props) => (
    <View>
        {Indicies.map(index =>
            <Item
                key={index.id}
                onPress={() => props.navigation.navigate('Page', {id: index.id})}>
                {index.id} {index.title}
            </Item>
        )}
    </View>
)


const Item = (props) =>
    <TouchableOpacity onPress={props.onPress}>
        <View>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
;