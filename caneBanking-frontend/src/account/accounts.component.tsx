import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts, getUser } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import userService from '../user/user.service';


export default function Accounts() {
    const userSelector = (state: UserState) => state.user;
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    console.log(user)

    useEffect(()=> {
      console.log('hey! user', user);
      AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
          console.log('accounts', accounts);
          dispatch(getAccounts(accounts));
      })
  }, [user])

  return (
    <View>
      <Text>
      Welcome to your accounts {user.firstname}
        </Text></View>

  );
}