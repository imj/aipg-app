import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

export default class CardModal extends Component {
    static navigationOptions = {
        mode: 'modal',
        headerMode: 'none',
    };

    render() {
        const card = this.props.navigation.state.params.card;

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.goBack()}
                    style={{padding: 20}}>
                    <Text style={{color: 'white'}}>Close</Text>
                </TouchableHighlight>

                <Image
                    source={{
                        uri: `http://gatherer.wizards.com/Handlers/Image.ashx?size=small&type=card&name=${card}`,
                    }}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
    },
    image: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.8,
        resizeMode: 'contain',
    },
});
