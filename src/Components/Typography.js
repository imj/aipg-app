import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const H1 = (props) =>
    <Text style={styles.h1}>{props.children}</Text>;

export const Strong = (props) =>
    <Text style={styles.strong}>{props.children}</Text>;

export const P = (props) =>
    <Text style={styles.paragraph}>{props.children}</Text>;

export const Annotation = (props) =>
    <View style={styles.annotation}>
        <Text style={[styles.paragraph, { fontStyle: 'italic' }]}>{props.children}</Text>
    </View>;


const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        marginVertical: 5,
    },
    strong: {
        fontWeight: 'bold',
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