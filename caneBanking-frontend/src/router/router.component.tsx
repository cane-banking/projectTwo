import React from 'react';
import DrawerNavigatorComponent from './DrawerNavigation.component';
import { enableScreens } from 'react-native-screens';

enableScreens();

/* Parameter list for RouteProp requires a field for the route that we're on. */

function RouterComponent(props: any) {

    return (
        <DrawerNavigatorComponent />

    );
}

export default RouterComponent;
