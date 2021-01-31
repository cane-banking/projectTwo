import React, { useEffect } from 'react';
import { View, 
        Text,
        Button,
        StyleSheet,
        ScrollView,
        StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions';
import { UserState } from '../store/store';
import userService from '../user/user.service';

export default function Accounts() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function chkBalance() {
      
       
    }

    console.log(user)
  return (
    <View>
      <Text>
      Welcome to your accounts {user.firstname}
      </Text>
      <View >
      <Button onPress={chkBalance} title='Saving Account' color='#63D4FF' /> 
      </View>

      <View > 
      <Button onPress={chkBalance} title='Checking Account' color='#63D4FF' /> 
      </View>
      
      <View> 
      <Button onPress={chkBalance} title='Credit Card' color='#63D4FF' /> 
      </View>
      
      </View>
  );
}

