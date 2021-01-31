import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../accounts/accounts.component';
import LoginComponent from '../user/login.component';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import SignUpComponent from '../user/signup.component';
import { CaneBankingState } from '../store/store';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();


interface MenuProp {
  navigation: any;
}

// const headerOptions: StackHeaderOptions = {
//   headerTitle: 'Cane Banking',
//   headerStyle: {backgroundColor: '#63D4FF'},
//   headerTitleAlign :'center',
//   headerTitleStyle : {
//     fontWeight:'bold',
//   },
//   headerLeft:() => (
//     <Icon.Button name ='ios-menu' size={25}
//     backgroundColor='#63D4FF' onPress={()=> navigation.openDrawer}></Icon.Button>
//   )

// };

const MainStackNavigatorComponent = ({navigation}:MenuProp) => {
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

export default MainStackNavigatorComponent ;