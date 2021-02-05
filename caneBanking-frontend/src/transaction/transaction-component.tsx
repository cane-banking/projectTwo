import  React, { useEffect }  from 'react';
import { View, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../store/actions';
import { CaneBankingState } from '../store/store';
import transactionService from './transaction.service';
import { color } from '../helpers/colorScheme';
import { TouchableHighlight } from 'react-native';


interface TransactionProp {
    navigation: any;
}

export function TransactionHistory(props: TransactionProp) {
    //change to transactions to return an ARRAY of transaction. Action needs to be changed.
    const transactions = useSelector((state: CaneBankingState) => state.transactions); //getting transaction from state
    const account = useSelector((state: CaneBankingState) => state.account);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    
    //const userSelector = (state: UserState) => state.user;
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
//});       
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
                    <View ><Text>{transaction.transaction_id}</Text></View>
                    <View ><Text>{transaction.time_stamp}</Text></View>
                    <View ><Text>{transaction.vendor}</Text></View>
                    <View ><Text>{transaction.vendor_account_id}</Text></View>
                    <View ><Text>{transaction.transaction_amt}</Text></View>
                    <View ><Text>{transaction.account_id}</Text></View>
                    <View ><Text>{transaction.customer_id}</Text></View> 
                   </TouchableHighlight>}):''}
            </View>
      </View>
    );
}

export default TransactionHistory;

