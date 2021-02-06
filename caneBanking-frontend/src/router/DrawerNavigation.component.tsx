import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent,AccountTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { LogoutStack, ApplicationStack, DepositCheckStack, TransactionStack, TransferStack, loginStackNavigator } from "./MainStackNavigator.component";
import Accounts from "../account/accounts.component";
import Logout from "../user/logout.component";
import LoginComponent from "../user/login.component";
import { UserState } from "../store/store";
import { useSelector } from "react-redux";


enableScreens();


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  const userSelector = (state: UserState) => state.loginUser;
  const user = useSelector(userSelector);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={loginStackNavigator}  />
      <Drawer.Screen name="Home" component={HomeTabNavigatorComponent}  />
      <Drawer.Screen name="Accounts" component={Accounts}/>
      <Drawer.Screen name="Add Account" component={ApplicationStack}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      <Drawer.Screen name="Transfer" component={TransferStack}/>
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="---" component={LoginComponent}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;