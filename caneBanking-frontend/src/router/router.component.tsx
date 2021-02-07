import React from 'react';
import DrawerNavigatorComponent from './DrawerNavigation.component';
import { enableScreens } from 'react-native-screens';

enableScreens();

function RouterComponent(props: any) {
    return (
        <DrawerNavigatorComponent />
    );
}

export default RouterComponent;
