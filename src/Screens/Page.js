import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import CardLink from '../Components/CardLink';
import contents from '../Contents';

export default class Page extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: contents[navigation.state.params.id].title,
    });

    render() {
        const ContentPage = contents[this.props.navigation.state.params.id].content;
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <ContentPage />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    contentContainer: {
        paddingVertical: 20,
    }
});