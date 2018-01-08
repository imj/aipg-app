import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import contents from '../Contents';

export default class Index extends Component {
    static navigationOptions = {
        title: 'Annotated IPG',
    }

    createIndexTree() {
        const tree = Object.keys(contents).sort().reduce((tree, key) => {
            if(key.indexOf('.') === -1) {
                return Object.assign({}, tree, {
                    [key]: []
                });
            }

            const [parent] = key.split('.');

            tree[parent].push(key);
            return tree;
        }, {});

        return tree;
    }

    render() {
        const tree = this.createIndexTree();

        return (
            <ScrollView style={styles.container}>
                {Object.keys(tree).map(key => (
                    <Ul key={key}>
                        <Li navigation={this.props.navigation} id={key}>{key}. {contents[key].title}</Li>
                        <Ul>
                        {tree[key].map(key =>
                            <Li navigation={this.props.navigation} id={key} key={key}>{key}. {contents[key].title}</Li>
                        )}
                        </Ul>
                    </Ul>
                ))}
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