import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from 'react-native-screens';
import Footer from "./Footer";
import LoginComponent from "../user/login.component";

enableScreens();


const Tab = createBottomTabNavigator();

const HomeTabNavigatorComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginComponent} />
      <Tab.Screen name="© Cane Industries, LLC" component={Footer} />
    </Tab.Navigator>
  );
};

export {HomeTabNavigatorComponent};