import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent,AccountTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { LogoutStack,BalanceStack, ApplicationStack, DepositCheckStack } from "./MainStackNavigator.component";


enableScreens();


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigatorComponent}  />
      <Drawer.Screen name="Logout" component={LogoutStack}/>
      <Drawer.Screen name="Balance" component={BalanceStack}/>
      <Drawer.Screen name="Application" component={ApplicationStack}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;