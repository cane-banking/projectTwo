import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent,AccountTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { LogoutStack, ApplicationStack, DepositCheckStack, TransactionStack, TransferStack, loginStackNavigator } from "./MainStackNavigator.component";
import Accounts from "../account/accounts.component";


enableScreens();


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={loginStackNavigator}  />
      <Drawer.Screen name="Logout" component={LogoutStack}/>
      <Drawer.Screen name="Add Account" component={ApplicationStack}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      <Drawer.Screen name="Transfer" component={TransferStack}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;