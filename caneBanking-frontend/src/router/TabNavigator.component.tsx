import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginComponent from '../user/login.component';
import SignUpComponent from '../user/signup.component';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../store/actions';

import  MainStackNavigatorComponent  from "./MainStackNavigator.component";

const Tab = createBottomTabNavigator();

const BottomTabNavigatorComponent = () => {
  return (
    <Tab.Navigator> 
      <Tab.Screen name="Login" component={MainStackNavigatorComponent} />
      <Tab.Screen name="Register" component={SignUpComponent} />
      {/* <Tab.Screen name="Logout" component={MainStackNavigatorComponent} /> */}
      

      {/* <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigatorComponent;