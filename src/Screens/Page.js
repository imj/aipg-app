import React, {Component} from 'react';
import {StyleSheet, WebView, Linking} from 'react-native';
import contents from '../Contents';

const CARD_REGEX = /[^"]+lems-mtg-helper-cardfinder\.php\?find=([^&]+)&[^<]+/;
const PAGE_LINK = /(?:[\w:\/]+blogs\.magicjudges\.org)?\/rules\/ipg(\d(?:-\d)*)\//;

export default class Page extends Component {
    static navigationOptions = ({navigation}) => ({
        title: contents[navigation.state.params.id].title
            .split('—')
            .pop()
            .trim(),
    });

    openCard(card) {
        this.props.navigation.navigate('CardModal', {card: card});
    }

    openPage(pageId) {
        this.props.navigation.navigate('Page', {id: pageId});
    }

    onMessage = event => {
        const url = event.nativeEvent.data;

        if (CARD_REGEX.test(url)) {
            const matches = url.match(CARD_REGEX);

            return this.openCard(matches[1]);
        }

        if (PAGE_LINK.test(url)) {
            const [, id] = url.match(PAGE_LINK);

            return this.openPage(id.replace('-', '.'));
        }

        Linking.openURL(url);
    };

    render() {
        const html = contents[this.props.navigation.state.params.id].content;
        return (
            <WebView
                onMessage={this.onMessage}
                style={{flex: 1}}
                source={{html: html}}
            />
        );
    }
}
