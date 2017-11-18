import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Index from './Screens/Index';
import Page from './Screens/Page';


const App = StackNavigator({
    Index: {
        screen: Index
    },
    Page: {
        screen: Page,
    }
}, {
    navigationOptions: ({navigation}) => ({
        headerRight:
            <Button title="Index" onPress={() => navigation.navigate('DrawerOpen')} />,
        headerBackTitle: null,
    })
})

const MyApp = DrawerNavigator({
    App: {
        screen: App,
    },
}, {
    drawerPosition: 'right',
});

export default MyApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
