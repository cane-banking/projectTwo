import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeAccountId, changeCheck, changeFromAccount, changeToAccount, changeTransferAmount, getAccounts, getUser } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Transaction} from './transaction';
import TransactionService from './addTransaction.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';
import { Account } from '../account/account';
import addTransactionService from './addTransaction.service';



interface Deposit {
    navigation: any;
}



function OwnTransfer({navigation}: Deposit) {
    const transaction = useSelector((state: CaneBankingState) => state.transaction);
    const user = useSelector((state: CaneBankingState) => state.user);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const toAccount = useSelector((state: CaneBankingState) => state.toAccount);
    const fromAccount = useSelector((state: CaneBankingState) => state.fromAccount);
    const transferAmount = useSelector((state: CaneBankingState) => state.transferAmount);
    const dispatch = useDispatch();
 console.log('accounts', accounts);

    useEffect(()=> {
        dispatch(changeFromAccount(accounts[0].account_id));
        dispatch(changeToAccount(accounts[1].account_id));
    }, [user])


function submitTransfer(){
    fromAccount.balance = fromAccount.balance - transferAmount;
    console.log('fromaccoutn balance', fromAccount);
    toAccount.balance = toAccount.balance + transferAmount;
    console.log('toacount balance', toAccount);
    AccountService.addDeposit(fromAccount).then(()=>{
        AccountService.addDeposit(toAccount).then(()=>{
        })
    })
    transaction.transaction_id = uuidv4();
    transaction.time_stamp = new Date();
    transaction.transaction_amt = transferAmount;
    transaction.account_id = toAccount.account_id;
    transaction.customer_id = user.customer_id;
    transaction.vendor = 'transfer'
    transaction.vendor_account_id = uuidv4();
    console.log('transaction after updates', transaction);
    addTransactionService.addTransaction(transaction).then(()=>{})
    navigation.navigate('Accounts');
}

    return (
        <View>
            <TextInput
                placeholder='$0.00'
                style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10, width: '80vw'}}
                keyboardType = 'numeric'
                onChangeText={(value) =>
                    dispatch(changeTransferAmount(Number(value)))
                }
                value={transferAmount.toString()}
                >
            </TextInput>
            <Text>FROM</Text>
            <Picker style={{width:'100%', padding: 10}}
                        selectedValue={fromAccount.account_id}
                        onValueChange={(itemValue, itemIndex) => {dispatch(changeFromAccount(itemValue.toString()))}}>
                {accounts ? accounts.map((account, index) => {
                       return <Picker.Item key={index} label={`${fromAccount.account_type}...
                                    ${fromAccount.account_id.substring(fromAccount.account_id.length - 5)}
                                    $(${fromAccount.balance})`} value={fromAccount.account_id}/>
                }): <Picker.Item label='No accounts available'></Picker.Item>}
                 </Picker>
                 <Text>TO</Text>
            <Picker style={{width:'100%', padding: 10}}
                        selectedValue={toAccount.account_id}
                        onValueChange={(itemValue, itemIndex) => {dispatch(changeToAccount(itemValue.toString()))}}>
                {accounts ? accounts.map((account, index) => {
                       return <Picker.Item key={index} label={`${toAccount.account_type}...
                                    ${toAccount.account_id.substring(toAccount.account_id.length - 5)}
                                    $(${toAccount.balance})`} value={toAccount.account_id}/>
                }): <Picker.Item label='No accounts available'></Picker.Item>}
            </Picker>
            {transferAmount > fromAccount.balance ? <Text>Insufficient Funds.</Text> : <Button onPress={submitTransfer} title='Submit'/>}
        </View>
    );
}

export default OwnTransfer;