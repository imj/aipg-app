import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';


const RULES = {
    '1.0': {
        title: 'General Philosophy',
    },
    '1.1': {
        title: 'Definition of Penalties',
    },
    '1.2': {
        title: 'Applying Penalties'
    }
}


export default class Page extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: RULES[navigation.state.params.id].title,
    });

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <H1>Warning</H1>
                <P>A Warning is an officially tracked penalty.</P>

                <Annotation>
                    A Warning needs to be tracked and judges should write it down on the back of the result slips (if you are using them). Then the Scorekeeper will input the warning penalty into WER to let Wizards of the Coast track the infraction. Both the Scorekeeper and the player need to be aware of the penalty. Scorekeepers can notify you when a player is close to an upgrade, and players need to be aware of how many penalties they have.
                </Annotation>

                <P>Warnings are used in situations of incorrect play when a small amount of time is needed to implement the corrective procedure. The purpose of a Warning is to alert judges and players involved that a problem has occurred and to keep a permanent record of the infraction in the DCI Penalty Database. A time extension should be issued if the ruling has taken more than a minute.</P>

                <Annotation>
                    Warnings are typically issued when judges have to step in to correct a situation. The main purpose of warnings is to give ‘weight’ to the reminder to play more carefully. It’s written down and tracked, therefore it’s significant, but it doesn’t need to be scary.
                    {"\n\n"}
                    If fixing the game state has taken more than one minute, give a time extension equal to the time taken, unless the match is in extra turns. You did look at the clock before walking up to the table, right?
                </Annotation>
            </ScrollView>
        )
    }
}

const H1 = (props) =>
    <Text style={styles.h1}>{props.children}</Text>;

const P = (props) =>
    <Text style={styles.paragraph}>{props.children}</Text>;

const Annotation = (props) =>
    <View style={styles.annotation}>
        <Text style={styles.paragraph}>{props.children}</Text>
    </View>;


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    contentContainer: {
        paddingVertical: 20,
    },
    h1: {
        fontSize: 24,
        marginVertical: 5,
    },
    paragraph: {
        fontSize: 14,
        marginVertical: 3,
    },
    annotation: {
        marginVertical: 10,
        marginHorizontal: -14,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#bcdff1',
        borderRadius: 4,
        backgroundColor: '#d9edf7'
    }
});