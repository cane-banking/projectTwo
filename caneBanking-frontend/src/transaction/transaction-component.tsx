import  React, { useState, Component, useEffect }  from 'react';
import { View, TextInput,Text, Button,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeApplication, getTransaction } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import  {Transaction} from './transaction';
import transactionService from './transaction.service';
import styles from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import { color } from '../helpers/colorScheme';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackParams } from '../router/router.component';
import { TouchableHighlight } from 'react-native';


interface TransactionProp {
    navigation: any;
}

export function TransactionHistory(props: TransactionProp) {
    //change to transactions to return an ARRAY of transaction. Action needs to be changed.
    const transactions = useSelector((state: CaneBankingState) => state.transactions); //getting transaction from state
    const account = useSelector((state: CaneBankingState) => state.account);
    //const account = useSelector((state:CaneBankingState) => state.account);
    //git pull from cterry2 . it has the account action called changeAccount
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect (() => {                
    transactionService.getTransactions(account.account_id).then((transactions) => {
    console.log(transactions);
    dispatch(getTransaction(transactions));
    //getTransacions (with a S!!)
    //nav.navigate('Login');
    });
},[user]) 
        
    return (
        //get all the transactions from the state
        //then, map over the transactions and return a touchableHighlight or Text component
        //ex. {transactions? transactions.map(transaction) => {Text, Touchable Highlight}}
        <View>
            <Text>
                 Welcome to your transactions 
            </Text>
            <View>
            {transactions ? transactions.map((transaction, index) => {
                    
                    return <TouchableHighlight key = {index}  onPress={()=> '' } underlayColor={color.white} >
                    <View ><Text>{transaction.account_id}</Text></View>
                   </TouchableHighlight>}):''}
            </View>
      </View>
    );
}

export default TransactionHistory;

