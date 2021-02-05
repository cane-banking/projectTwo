import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent,AccountTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { LogoutStack, ApplicationStack, DepositCheckStack, TransactionStack, TransferStack, loginStackNavigator } from "./MainStackNavigator.component";
import Accounts from "../account/accounts.component";
import Logout from "../user/logout.component";


enableScreens();


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigatorComponent}  />
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="Login" component={loginStackNavigator}/>
      <Drawer.Screen name="Application" component={ApplicationStack}/>
      <Drawer.Screen name="Accounts" component={Accounts}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      <Drawer.Screen name="Transaction History" component={TransactionStack}/>
      <Drawer.Screen name="Transfer" component={TransferStack}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;