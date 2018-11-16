import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Linking,
    TouchableOpacity,
} from 'react-native';

export default class Index extends Component {
    static navigationOptions = {
        title: 'Annotated IPG',
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{paddingVertical: 20}}>
                <Ul>
                    <Li navigation={this.props.navigation} id="1">
                        1. General Philosophy
                    </Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="1.1">
                            1.1. Definition of Penalties
                        </Li>
                        <Li navigation={this.props.navigation} id="1.2">
                            1.2. Applying Penalties
                        </Li>
                        <Li navigation={this.props.navigation} id="1.3">
                            1.3. Randomizing a Deck
                        </Li>
                        <Li navigation={this.props.navigation} id="1.4">
                            1.4. Backing Up
                        </Li>
                        <Li navigation={this.props.navigation} id="1.5">
                            1.5. Sets
                        </Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="2">
                        2. Game Play Errors
                    </Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="2.1">
                            2.1. Missed Trigger
                        </Li>
                        <Li navigation={this.props.navigation} id="2.2">
                            2.2. Looking at Extra Cards
                        </Li>
                        <Li navigation={this.props.navigation} id="2.3">
                            2.3. Hidden Card Error
                        </Li>
                        <Li navigation={this.props.navigation} id="2.4">
                            2.4. Mulligan Procedure Error
                        </Li>
                        <Li navigation={this.props.navigation} id="2.5">
                            2.5. Game Rule Violation
                        </Li>
                        <Li navigation={this.props.navigation} id="2.6">
                            2.6. Failure to Maintain Game State
                        </Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="3">
                        3. Tournament Errors
                    </Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="3.1">
                            3.1. Tardiness
                        </Li>
                        <Li navigation={this.props.navigation} id="3.2">
                            3.2. Outside Assistance
                        </Li>
                        <Li navigation={this.props.navigation} id="3.3">
                            3.3. Slow Play
                        </Li>
                        <Li navigation={this.props.navigation} id="3.4">
                            3.4. Decklist Problem
                        </Li>
                        <Li navigation={this.props.navigation} id="3.5">
                            3.5. Deck Problem
                        </Li>
                        <Li navigation={this.props.navigation} id="3.6">
                            3.6. Limited Procedure Violation
                        </Li>
                        <Li navigation={this.props.navigation} id="3.7">
                            3.7. Communication Policy Violation
                        </Li>
                        <Li navigation={this.props.navigation} id="3.8">
                            3.8. Marked Cards
                        </Li>
                        <Li navigation={this.props.navigation} id="3.9">
                            3.9. Insufficient Shuffling
                        </Li>
                    </Ul>
                </Ul>
                <Ul>
                    <Li navigation={this.props.navigation} id="4">
                        4. Unsporting Conduct
                    </Li>
                    <Ul>
                        <Li navigation={this.props.navigation} id="4.1">
                            4.1. Minor
                        </Li>
                        <Li navigation={this.props.navigation} id="4.2">
                            4.2. Major
                        </Li>
                        <Li navigation={this.props.navigation} id="4.3">
                            4.3. Improperly Determining a Winner
                        </Li>
                        <Li navigation={this.props.navigation} id="4.4">
                            4.4. Bribery and Wagering
                        </Li>
                        <Li navigation={this.props.navigation} id="4.5">
                            4.5. Aggressive Behavior
                        </Li>
                        <Li navigation={this.props.navigation} id="4.6">
                            4.6. Theft of Tournament Material
                        </Li>
                        <Li navigation={this.props.navigation} id="4.7">
                            4.7. Stalling
                        </Li>
                        <Li navigation={this.props.navigation} id="4.8">
                            4.8. Cheating
                        </Li>
                    </Ul>
                </Ul>

                <Ul>
                    <Text style={styles.li}>Credits</Text>
                    <Ul>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL(
                                    'https://blogs.magicjudges.org/rules/annotated-ipg-credits/'
                                )
                            }>
                            <Text style={styles.li}>AIPG Authoring</Text>
                        </TouchableOpacity>
                    </Ul>
                </Ul>
            </ScrollView>
        );
    }
}

const Ul = props => <View style={styles.ul}>{props.children}</View>;

const Li = props => (
    <TouchableOpacity
        onPress={() => props.navigation.navigate('Page', {id: props.id})}>
        <Text style={styles.li}>{props.children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    ul: {
        paddingLeft: 10,
    },
    li: {
        fontSize: 14,
        marginBottom: 10,
    },
});
