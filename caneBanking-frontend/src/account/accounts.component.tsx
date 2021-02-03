import React, { useEffect } from 'react';
import { View,
        Text,
        TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccount, getAccounts } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import { color } from '../../global-styles';


interface AccountProp {
  navigation: any;
}

export default function Accounts({navigation}:AccountProp) {
    const userSelector = (state: UserState) => state.user;
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const user = useSelector(userSelector);
    const dispatch = useDispatch()


    useEffect(()=> {

      AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
          dispatch(getAccounts(accounts));
      })
  }, [user])

  function selectAccount() {
    dispatch(changeAccount(account.account_id));
    navigation.navigate('TransactionHistory');
  }

  return (
    <View>
      <Text>
      Welcome to your accounts {user.firstname}
      </Text>
      <View>
      {accounts ? accounts.map((account, index) => {
                       return <TouchableHighlight key = {index}  onPress={selectAccount} underlayColor={color.white} >
                       <View ><Text>{account.account_type} {account.balance}</Text></View>
                   </TouchableHighlight>}):''}
                   </View>
      </View>
  );
}

