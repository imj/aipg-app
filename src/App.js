import React from 'react';
import {View, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Index from './Screens/Index';
import Page from './Screens/Page';
import Search from './Screens/Search';
import CardModal from './Screens/CardModal';
import SearchButton from './Components/SearchButton';

const App = createStackNavigator(
    {
        Index: Index,
        Page: Page,
        Search: Search,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerRight: (
                <SearchButton onPress={() => navigation.navigate('Search')} />
            ),
            headerBackTitle: null,
            headerTitleStyle: {
                fontSize: 14,
            },
        }),
    }
);

const ModalNav = createStackNavigator(
    {
        MainCardNavigator: {screen: App},
        CardModal: {
            screen: CardModal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transparent',
        },
    }
);

const RootContainer = createAppContainer(ModalNav);

const AppWrapper = () => (
    <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <RootContainer />
    </React.Fragment>
);

export default AppWrapper;
