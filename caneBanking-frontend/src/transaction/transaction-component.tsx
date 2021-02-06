import  React, { useState, Component, useEffect }  from 'react';
import { View, TextInput,Text, Button,StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import  {Transaction} from './transaction';
import transactionService from './transaction.service';
import styles from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import { color } from '../helpers/colorScheme';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import { Card, Divider, Icon } from 'react-native-elements';


interface TransactionProp {
    navigation: any;
}

export function TransactionHistory(props: TransactionProp) {
    //change to transactions to return an ARRAY of transaction. Action needs to be changed.
    const transactions = useSelector((state: CaneBankingState) => state.transactions); //getting transaction from state
    const account = useSelector((state: CaneBankingState) => state.account);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const user = useSelector((state: CaneBankingState) => state.user);
    const dispatch = useDispatch();
    console.log('account',account);
    console.log('accounts',accounts);
    useEffect (() => {                
    transactionService.getTransactions(account.account_id).then((transactions) => {
    console.log('transactions',transactions);
    dispatch(getTransaction(transactions));
    })
},[user]) 
       
    return (
          <View style={styles.container}>
            {transactions.length ? (
              <>
                <View style={styles.heading}>
                  <Text style={styles.boldText}>Welcome to your transactions history {user.firstname}</Text>
                </View>
                <FlatList
                  keyExtractor={(item) => item.account_id}
                  data={transactions}
                  renderItem={({ item }) =>(
                <>

                <Card containerStyle={styles.card}>
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Date: {item.time_stamp}</Text>
                    </View>
                  </View>
                  <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Vendor: {item.vendor}</Text>
                    </View>
                  </View>
                  <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Amount: ${item.transaction_amt}</Text>
                    </View>
                  </View>
                </Card>
                </>
                )}
                />
              </>
              ) :  (
              <View>
                <View style={styles.heading}>
                  <Text style={styles.boldText}>Welcome {user.firstname}, You have not made any transaction yet.</Text>
                </View>
              </View>
            )}
          </View>
    );
}

export default TransactionHistory;

