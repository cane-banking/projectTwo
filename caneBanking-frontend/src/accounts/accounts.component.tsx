import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions';
import { UserState } from '../store/store';
import userService from '../user/user.service';


export default function Accounts() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    console.log(user)
  return (
    <View>
      <Text>
      Welcome to your accounts {user.firstname}
        </Text></View>

  );
}