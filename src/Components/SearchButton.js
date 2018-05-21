import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const searchIcon = require('../res/search.png');

export default class SearchButton extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.container}>
                <Image source={searchIcon} style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {width: 30, height: 30, resizeMode: 'contain'},
});
