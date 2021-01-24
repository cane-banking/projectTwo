import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../user/login.component';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { CaneBankingState } from '../store/store';
import { useSelector } from 'react-redux';
import Accounts from '../accounts/accounts.component';

/* Parameter list for RouteProp requires a field for the route that we're on. */
export type StackParams = {
    Login: undefined;
    Accounts: undefined;
};

const Stack = createStackNavigator<StackParams>();
const headerOptions: StackHeaderOptions = {
    headerTitle: () => <Text>Cane Banking</Text>,
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

        </Stack.Navigator>
        
    );
}

export default RouterComponent;
