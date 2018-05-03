import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Index from './Screens/Index';
import Page from './Screens/Page';
import CardModal from './Screens/CardModal';
import Drawer from './Components/Drawer';


const App = StackNavigator({
    Index: {
        screen: Index
    },
    Page: {
        screen: Page,
    }
}, {
    navigationOptions: ({navigation}) => ({
        // headerRight:
            // <Button title="Index" onPress={() => navigation.navigate('DrawerOpen')} />,
        headerBackTitle: null,
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

const MyApp = DrawerNavigator({
    ModalNav: {
        screen: ModalNav,
    },
}, {
    drawerPosition: 'right',
    contentComponent: Drawer,
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
