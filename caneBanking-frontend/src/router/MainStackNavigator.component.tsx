import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../account/accounts.component';
import LoginComponent from '../user/login.component';
import SignUpComponent from '../user/signup.component';
import { enableScreens } from 'react-native-screens';
import CreateApplication from "../application/application-component";
import DepositCheck from "../check/DepositCheck.component";
import TransactionHistory from "../transaction/transaction-component";
import Admin from "../employee/admin";
import TransferSelection from "../transaction/TransferSelection";
import OwnTransfer from "../transaction/OwnTransfer";
import OtherTransfer from "../transaction/OtherTransfer";
import Logout from "../user/logout.component";
import { color } from "../../global-styles";


enableScreens();


const Stack = createStackNavigator();

interface MenuProp {
  navigation: any;
}


const loginStackNavigator = ({navigation}:MenuProp) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginComponent}
      options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center'
        }} />

      <Stack.Screen name="Accounts" component={Accounts}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

<Stack.Screen name="Transaction History" component={TransactionHistory}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={15}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

  <Stack.Screen name="Admin" component={Admin}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>


      <Stack.Screen name="Register" component={SignUpComponent}
       options={{title:'CANE Banking',
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
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const ApplicationStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Application" component={CreateApplication}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

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
      <Stack.Screen name="Logout" component={Logout}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}


const TransactionStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Transaction History" component={TransactionHistory}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const DepositCheckStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Deposit Check" component={DepositCheck}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const OtherTransferStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="OtherTransfer" component={OtherTransfer}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

    </Stack.Navigator>
  )
}

const AccountStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="Accounts" component={Accounts}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>
    </Stack.Navigator>
  )
}

const TransferStack=({navigation}:MenuProp) =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Transfer" component={TransferSelection}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

      <Stack.Screen name="OwnTransfer" component={OwnTransfer}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>

      <Stack.Screen name="OtherTransfer" component={OtherTransfer}
        options={{title:'CANE Banking',
        headerStyle: {
          backgroundColor: '#63D4FF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          color: color.darkGray

        },
        headerTitleAlign:'center',
        headerRight:() => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer()}></Icon.Button>)
        }}/>
    </Stack.Navigator>
  )
}

export {loginStackNavigator,registerAccountStack,LogoutStack,ApplicationStack,DepositCheckStack,TransactionStack, TransferStack, OtherTransferStack, AccountStack} ;

