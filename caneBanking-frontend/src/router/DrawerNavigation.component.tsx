import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent,AccountTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { LogoutStack,BalanceStack } from "./MainStackNavigator.component";

enableScreens();


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={HomeTabNavigatorComponent}  />
      <Drawer.Screen name="Logout" component={LogoutStack}/>
      <Drawer.Screen name="Balance" component={BalanceStack}/>
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;