import React from 'react';
import DrawerNavigatorComponent from './DrawerNavigation.component';
import { enableScreens } from 'react-native-screens';
import { Transaction } from '../transaction/transaction';

enableScreens();

function RouterComponent(props: any) {
    return (
        <DrawerNavigatorComponent />
    );
}

export default RouterComponent;
