import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import SearchButton from '../Components/SearchButton';
import contents from '../Contents';

const lunr = require('lunr');
const data = require('../Contents/search-index.json');

const idx = lunr.Index.load(data);

export default class Search extends Component {
    static navigationOptions = {
        title: 'Search',
        headerRight: null,
    };

    state = {
        search: '',
        results: [],
    };

    search = () => {
        if (!this.state.search) {
            this.setState({
                results: [],
            });

            return;
        }
        const results = idx.search(this.state.search).slice(0, 6);
        // .filter(result => result.score > 0.5);

        this.setState({
            results,
        });
    };

    render() {
        const {navigation} = this.props;

        return (
            <View style={{flex: 1, padding: 20}}>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={this.state.search}
                        onSubmitEditing={this.search}
                        onChangeText={text => this.setState({search: text})}
                        underlineColorAndroid="transparent"
                        placeholder="Search here"
                        style={styles.inputField}
                    />
                    <SearchButton onPress={this.search} />
                </View>

                <FlatList
                    data={this.state.results}
                    bounces={false}
                    keyExtractor={item => item.ref}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Page', {id: item.ref})
                            }>
                            <View style={styles.rowItem}>
                                <Text style={styles.resultText}>
                                    {item.ref} {contents[item.ref].title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    inputField: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#888',
        height: 40,
        paddingHorizontal: 10,
        flex: 1,
    },
    resultText: {
        marginBottom: 20,
        fontSize: 14,
    },
});
