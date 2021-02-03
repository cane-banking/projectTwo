import React, { useEffect } from 'react';
import { View, 
        Text,
        TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import style ,{color } from '../../global-styles';


interface AccountProp {
  navigation: any;
}

export default function Accounts({navigation}:AccountProp) {
    const userSelector = (state: UserState) => state.user;
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const user = useSelector(userSelector);
    const dispatch = useDispatch()

    console.log(user)

    useEffect(()=> {
      console.log('hey! user', user);
      AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
          console.log('accounts', accounts);
          dispatch(getAccounts(accounts));
      })
  }, [user])

  return (
    <View style={[style.container, style.login]}>
   
      <Text style={style.boldText}>
      Welcome to your accounts {user.firstname}
      </Text>
      <View>
      {accounts ? accounts.map((account, index) => {
                    console.log('acct',account);
                       return <TouchableHighlight key = {index}  onPress={()=> '' } underlayColor={color.white} >
                       <View style={style.label} ><Text >{account.account_type} {account.balance}</Text></View>
                   </TouchableHighlight>}):''}
                   </View>
      
      </View>
  );
}

