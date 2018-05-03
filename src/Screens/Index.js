import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import contents from '../Contents';

export default class Index extends Component {
    static navigationOptions = {
        title: 'Annotated IPG',
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Ul>
                    <Li navigation={this.props.navigation} id="1">1. General Philosophy</Li>
                    <Ul>

                        <Li navigation={this.props.navigation} id="1.1">1.1. Definition of Penalties</Li>
                        <Li navigation={this.props.navigation} id="1.2">1.2. Applying Penalties</Li>
                        <Li navigation={this.props.navigation} id="1.3">1.3. Randomizing a Deck</Li>
                        <Li navigation={this.props.navigation} id="1.4">1.4. Backing Up</Li>
                        <Li navigation={this.props.navigation} id="1.5">1.5. Sets</Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="2">2. Game Play Errors</Li>
                    <Ul>

                        <Li navigation={this.props.navigation} id="2.1">2.1. Game Play Error — Missed Trigger</Li>
                        <Li navigation={this.props.navigation} id="2.2">2.2. Game Play Error — Looking at Extra Cards</Li>
                        <Li navigation={this.props.navigation} id="2.3">2.3. Game Play Error — Hidden Card Error</Li>
                        <Li navigation={this.props.navigation} id="2.4">2.4. Game Play Error — Mulligan Procedure Error</Li>
                        <Li navigation={this.props.navigation} id="2.5">2.5. Game Play Error — Game Rule Violation</Li>
                        <Li navigation={this.props.navigation} id="2.6">2.6. Game Play Error — Failure to Maintain Game State</Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="3">3. Tournament Errors</Li>
                    <Ul>

                        <Li navigation={this.props.navigation} id="3.1">3.1. Tournament Error — Tardiness</Li>
                        <Li navigation={this.props.navigation} id="3.2">3.2. Tournament Error — Outside Assistance</Li>
                        <Li navigation={this.props.navigation} id="3.3">3.3. Tournament Error — Slow Play</Li>
                        <Li navigation={this.props.navigation} id="3.4">3.4. Tournament Error — Decklist Problem</Li>
                        <Li navigation={this.props.navigation} id="3.5">3.5. Tournament Error — Deck Problem</Li>
                        <Li navigation={this.props.navigation} id="3.6">3.6. Tournament Error — Limited Procedure Violation</Li>
                        <Li navigation={this.props.navigation} id="3.7">3.7. Tournament Error — Communication Policy Violation</Li>
                        <Li navigation={this.props.navigation} id="3.8">3.8. Tournament Error — Marked Cards</Li>
                        <Li navigation={this.props.navigation} id="3.9">3.9. Tournament Error — Insufficient Shuffling</Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="4">4. Unsporting Conduct</Li>
                    <Ul>

                        <Li navigation={this.props.navigation} id="4.1">4.1. Unsporting Conduct — Minor</Li>
                        <Li navigation={this.props.navigation} id="4.2">4.2. Unsporting Conduct — Major</Li>
                        <Li navigation={this.props.navigation} id="4.3">4.3. Unsporting Conduct — Improperly Determining a Winner</Li>
                        <Li navigation={this.props.navigation} id="4.4">4.4. Unsporting Conduct — Bribery and Wagering</Li>
                        <Li navigation={this.props.navigation} id="4.5">4.5. Unsporting Conduct — Aggressive Behavior</Li>
                        <Li navigation={this.props.navigation} id="4.6">4.6. Unsporting Conduct — Theft of Tournament Material</Li>
                        <Li navigation={this.props.navigation} id="4.7">4.7. Unsporting Conduct — Stalling</Li>
                        <Li navigation={this.props.navigation} id="4.8">4.8. Unsporting Conduct — Cheating</Li>
                    </Ul>
                </Ul>
            </ScrollView>
        )
    }
}

const Ul = (props) =>
    <View style={styles.ul}>{props.children}</View>

const Li = (props) =>
    <TouchableOpacity onPress={() => props.navigation.navigate('Page', { id: props.id })}><Text style={styles.li}>{props.children}</Text></TouchableOpacity>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    ul: {
        paddingLeft: 10,
    },
    li: {
        fontSize: 16,
        lineHeight: 30,
    }
})