import React, { useEffect } from 'react';
import { View,
        Text,
        TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccount, getAccounts } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import style ,{color } from '../../global-styles';


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
    navigation.navigate('TransactionHistory');
  }

  return (
    <View style={[style.container, style.login]}>
   
      <Text style={style.boldText}>
      Welcome to your accounts {user.firstname}
      </Text>
      <View>
      {accounts ? accounts.map((account, index) => {
<<<<<<< HEAD
                       return <TouchableHighlight key = {index}  onPress={selectAccount} underlayColor={color.white} >
                       <View ><Text>{account.account_type} {account.balance}</Text></View>
=======
                    console.log('acct',account);
                       return <TouchableHighlight key = {index}  onPress={()=> '' } underlayColor={color.white} >
                       <View style={style.label} ><Text >{account.account_type} {account.balance}</Text></View>
>>>>>>> 92d1ee179a0d28e0bfa3977014c081b21fff9da1
                   </TouchableHighlight>}):''}
                   </View>
      
      </View>
  );
}

