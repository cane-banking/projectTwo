import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import{HomeTabNavigatorComponent} from "./TabNavigator.component";
import { enableScreens } from 'react-native-screens';
import { ApplicationStack, DepositCheckStack, TransactionStack, TransferStack, loginStackNavigator, OtherTransferStack, AccountStack } from "./MainStackNavigator.component";
import Accounts from "../account/accounts.component";
import { useDispatch, useSelector } from "react-redux";
import { CaneBankingState } from "../store/store";
import LoginComponent from "../user/login.component";
import Logout from "../user/logout.component";
import OtherTransfer from "../transaction/OtherTransfer";
import { UserState } from "../store/store";
//import { useSelector } from "react-redux";



enableScreens();


const Drawer = createDrawerNavigator();



const DrawerNavigatorComponent = () => {
  const user = useSelector((state: CaneBankingState) => state.user);
  const accounts = useSelector((state: CaneBankingState) => state.accounts);
  const dispatch = useDispatch();


  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={loginStackNavigator} />
      <Drawer.Screen name="Add Account" component={ApplicationStack}/>
      <Drawer.Screen name="Accounts" component={AccountStack}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      <Drawer.Screen name="Transaction History" component={TransactionStack}/>
      <Drawer.Screen name="Transfer" component={accounts && accounts.length <= 2 ? OtherTransferStack: TransferStack}/>
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="---" component={LoginComponent}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;