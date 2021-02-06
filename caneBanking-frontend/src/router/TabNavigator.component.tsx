import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  {loginStackNavigator,registerAccountStack,LogoutStack}  from "./MainStackNavigator.component";
import { enableScreens } from 'react-native-screens';

enableScreens();


const Tab = createBottomTabNavigator();

const HomeTabNavigatorComponent = () => {
  return (
    <Tab.Navigator> 
      <Tab.Screen name="Login" component={loginStackNavigator} />
      <Tab.Screen name="Register" component={registerAccountStack} />
    </Tab.Navigator>
  );
};

const AccountTabNavigatorComponent = () => {
  return (
    <Tab.Navigator> 
      <Tab.Screen name="Logout" component={LogoutStack} />
      <Tab.Screen name="Register" component={registerAccountStack} />
    </Tab.Navigator>
  );
};

export {HomeTabNavigatorComponent, AccountTabNavigatorComponent};