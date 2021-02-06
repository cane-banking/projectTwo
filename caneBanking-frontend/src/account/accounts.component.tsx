import React, { useEffect } from 'react';
import { View,
        Text,
        FlatList,
        Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getAccounts} from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import styles, { color } from '../../global-styles';
import { Card, Divider, Icon } from 'react-native-elements';


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

  console.log(accounts)

  function selectAccount() {
    navigation.navigate('TransactionHistory');
  }

  function createAccount() {
    navigation.navigate('Application');
}

  return (
      <View style={styles.container}>
      {accounts.length ? (
        <>
      <View style={styles.heading}>
        <Text style={styles.boldText}>Welcome to your accounts {user.firstname}</Text>
      </View>

      <FlatList
            keyExtractor={(item) => item.account_id}
            data={accounts}
            renderItem={({ item }) =>(
              <>

              <Card containerStyle={styles.card}>

                <Text style={styles.apptitle}>{item.account_type}</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                 <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.applicant}>${item.balance}</Text>
                 </View>
                </View>

                <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Button onPress={selectAccount} title={item.account_id} color='#63D4FF' />
                </View>

              </Card>

            </>

            )}
        />

      
      </>

    ) :  (
      <View>
        <View style={styles.heading}>
          <Text style={styles.boldText}>Welcome {user.firstname}, create your first account</Text>
        </View>
        <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
      </View>
    )}

    </View>
    
  );
}

