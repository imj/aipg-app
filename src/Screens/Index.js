import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';


export default class Index extends Component {
    static navigationOptions = {
        title: 'Annotated IPG',
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Ul>
                    <Li navigation={this.props.navigation} id="1.0">1. General Philosophy</Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="1.1">1.1. Definition of Penalties</Li>
                        <Li navigation={this.props.navigation} id="1.2">1.2. Applying Penalties</Li>
                        <Li navigation={this.props.navigation} id="1.3">1.3. Randomizing a Deck</Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="2.0">2. Game Play Errors</Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="2.1">2.1. Game Play Error — Missed Trigger</Li>
                        <Li navigation={this.props.navigation} id="2.2">2.2. Game Play Error — Looking at Extra Cards</Li>
                        <Li navigation={this.props.navigation} id="2.3">2.3. Game Play Error — Hidden Card Error</Li>
                    </Ul>
                </Ul>
            </ScrollView>
        )
    }
}

const Ul = (props) =>
    <View style={styles.ul}>{props.children}</View>

const Li = (props) =>
    <TouchableOpacity onPress={() => props.navigation.navigate('Page', {id: props.id})}><Text style={styles.li}>{props.children}</Text></TouchableOpacity>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    ul: {
        paddingLeft: 20,
    },
    li: {
        fontSize: 16,
        lineHeight: 30,
    }
})