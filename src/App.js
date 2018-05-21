import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Index from './Screens/Index';
import Page from './Screens/Page';
import Search from './Screens/Search';
import CardModal from './Screens/CardModal';
import SearchButton from './Components/SearchButton';

const App = StackNavigator({
    Index: {
        screen: Index
    },
    Page: {
        screen: Page,
    },
    Search: {
        screen: Search,
    }
}, {
    navigationOptions: ({navigation}) => ({
        headerRight:
            <SearchButton onPress={() => navigation.navigate('Search')} />,
        headerBackTitle: null,
        headerTitleStyle: {
            fontSize: 14,
        }
    })
});

const ModalNav = StackNavigator({
    MainCardNavigator: { screen: App },
    CardModal: {
        screen: CardModal,
    }
}, {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'transparent',
    },
});

export default ModalNav;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
