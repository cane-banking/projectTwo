import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../accounts/accounts.component';
import LoginComponent from '../user/login.component';
import SignUpComponent from '../user/signup.component';
import BalanceComponent from '../accounts/Balance/Balance.component';
import { enableScreens } from 'react-native-screens';


enableScreens();


const Stack = createStackNavigator();

interface MenuProp {
  navigation: any;
}

const loginStackNavigator = ({navigation}:MenuProp) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginComponent}  
      options={{title:'Cane Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center'
        }} />

      <Stack.Screen name="Accounts" component={Accounts} 
        options={{title:'Cane Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>


      <Stack.Screen name="Register" component={SignUpComponent}  
       options={{title:'Cane Banking',
       headerStyle: {
         backgroundColor: '#63D4FF',
       },
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTitleAlign:'center',
       headerRight:() => (
         <Icon.Button name ='ios-menu' size={25}
         backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>
       )
       }}  />
    </Stack.Navigator>
  );
}
const registerAccountStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Register" component={SignUpComponent} 
        options={{title:'Cane Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const LogoutStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Logout" component={LoginComponent} 
        options={{title:'Cane Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const BalanceStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Balance" component={BalanceComponent} 
        options={{title:'Cane Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

export {loginStackNavigator,registerAccountStack,LogoutStack,BalanceStack} ;