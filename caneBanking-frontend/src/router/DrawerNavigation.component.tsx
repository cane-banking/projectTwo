import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { enableScreens } from 'react-native-screens';
import { ApplicationStack, DepositCheckStack,TransferStack, loginStackNavigator} from "./MainStackNavigator.component";
import LoginComponent from "../user/login.component";
import Logout from "../user/logout.component";

enableScreens();

const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={loginStackNavigator} />
      <Drawer.Screen name="Open a new account" component={ApplicationStack}/>
      <Drawer.Screen name="Deposit a check" component={DepositCheckStack}/>
      <Drawer.Screen name="Transfer funds" component={TransferStack}/>
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="---" component={LoginComponent}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;