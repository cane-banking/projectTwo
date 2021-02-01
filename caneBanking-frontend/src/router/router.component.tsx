import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../user/login.component';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { CaneBankingState } from '../store/store';
import { useSelector } from 'react-redux';
import SignUpComponent from '../user/signup.component';

import Admin from '../employee/admin';
import DepositCheck from '../check/DepositCheck.component';
import NavBarComponent from './navbar.component';
import CreateApplication from '../accounts/application-component';
import Accounts from '../accounts/accounts.component';

/* Parameter list for RouteProp requires a field for the route that we're on. */
export type StackParams = {
    Login: undefined;
    Accounts: undefined;
    Register: undefined;
    Admin: undefined;
    DepositCheck: undefined;
    CreateApplication: undefined;
};

const Stack = createStackNavigator<StackParams>();
const headerOptions: StackHeaderOptions = {
    headerStyle: {
        backgroundColor: '#63D4FF'
    },
    headerTitle: () => <Text>Cane Banking</Text>,
    headerRight: () => <NavBarComponent />
};
function RouterComponent(props: any) {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Accounts'
                component={Accounts}
                options={headerOptions}
            />
            <Stack.Screen
                name='CreateApplication'
                component={CreateApplication}
                options={headerOptions}
            />
            <Stack.Screen
                name='Register'
                component={SignUpComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Admin'
                component={Admin}
                options={headerOptions}
            />
            <Stack.Screen
                name='DepositCheck'
                component={DepositCheck}
                options={headerOptions}
            />


        </Stack.Navigator>

    );
}

export default RouterComponent;
