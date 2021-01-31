import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import DrawerNavigatorComponent from './DrawerNavigation.component';
import { CaneBankingState } from '../store/store';
import { useSelector } from 'react-redux';
import SignUpComponent from '../user/signup.component';
import BottomTabNavigatorComponent from './TabNavigator.component';
import MainStackNavigatorComponent from './MainStackNavigator.component';


/* Parameter list for RouteProp requires a field for the route that we're on. */
export type StackParams = {
    Login: undefined;
    Accounts: undefined;
    Register: undefined;
};


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<StackParams>();
const headerOptions: StackHeaderOptions = {
    headerStyle: {
        backgroundColor: '#63D4FF'
    },
    headerTitle: () => <Text>Cane Banking</Text>,
    headerTitleStyle: {fontWeight: 'bold', alignContent: 'center'}
};
function RouterComponent(props: any) {
    return (
        <DrawerNavigatorComponent />  
       
    );
}

export default RouterComponent;
