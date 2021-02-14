import React, { useEffect } from 'react';
import { View,
        Text,
        FlatList,
        Button,
        TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {changeAccount, getAccounts} from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import styles, { color } from '../../global-styles';
import { Card, Divider, Icon } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';


interface AccountProp {
  navigation: any;
}

export default function Accounts({navigation}:AccountProp) {
    const userSelector = (state: UserState) => state.user;
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const user = useSelector(userSelector);
    const dispatch = useDispatch()

   useEffect(()=> {
      AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
          dispatch(getAccounts(accounts));
      })
  }, [user, dispatch, navigation])

  function createAccount() {
    navigation.navigate('Add Account');
}

  return (
      <View style={styles.container}>
        {accounts && accounts.length ? (
          <>
            <View style={styles.heading}>
              <Text style={[styles.boldText, {fontSize: 25}]}>Welcome, {user.firstname}!</Text>
            </View>
            <FlatList
                  keyExtractor={(item) => item.account_id}
                  data={accounts}
                  renderItem={({ item }) =>(
                    <>
                      <Card containerStyle={styles.card}>
                        <Text style={{fontWeight:'bold', color: color.darkGray}}>{`${item.account_type} .......${item.account_id.substring(item.account_id.length - 5)}`}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={[styles.applicant, {fontSize: 25, color: color.lightBlue}]}>${item.balance}</Text>
                        </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableHighlight onPress={() => {
                            dispatch(changeAccount(item.account_id));
                            navigation.navigate('Transaction History');
                            return;}} underlayColor={color.lightBlue} >
                            <View>
                                <Text style={{textDecorationLine: 'underline', color: color.darkGray}}>{'View Transaction History >'}</Text>
                            </View>
                        </TouchableHighlight>
                        </View>
                      </Card>
                    </>
                  )}
            />
          </>
        ) : (
        <View>
          <View style={styles.heading}>
            <Text style={styles.boldText}>Welcome {user.firstname}! Create your first account.</Text>
          </View>
          <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
        </View>
        )}
    </View>
  );
}

