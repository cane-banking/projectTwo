import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigatorComponent from "./TabNavigator.component";
import LoginComponent from '../user/login.component';


const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={BottomTabNavigatorComponent}  />
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;