import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {color} from '../../global-styles';
import { changeAccountId, changeFromAccount, changeToAccount, changeTransferAmount } from '../store/actions';
import { CaneBankingState } from '../store/store';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';
import { Account } from '../account/account';
import {v4 as uuidv4} from 'uuid';
import addTransactionService from './addTransaction.service';
import {v4 as uuidv4} from 'uuid';




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
    const id = useSelector((state: CaneBankingState) => state.id);
    const dispatch = useDispatch();

function submitTransfer(){
    fromAccount.balance = fromAccount.balance - transferAmount;
    toAccount.balance = toAccount.balance + transferAmount;
    AccountService.addDeposit(fromAccount).then(()=>{
        AccountService.addDeposit(toAccount).then(()=>{
            dispatch(changeFromAccount(''));
            dispatch(changeToAccount(''));
        })
    })
    // transaction_id = '';
    // time_stamp = Date;
    // vendor = '';
    // vendor_account_id = '';
    // transaction_amt = 0;
    // account_id = '';
    // customer_id = '';
    //6b35df18-0be0-4c4a-8380-e0a1eb70bef0
    transaction.transaction_id = uuidv4();
    transaction.time_stamp = new Date();
    transaction.transaction_amt = transferAmount;
    transaction.account_id = fromAccount.account_id;
    transaction.customer_id = user.customer_id;
    transaction.vendor = 'transfer'
    transaction.vendor_account_id = uuidv4();
    addTransactionService.addTransaction(transaction).then(()=>{})
    navigation.navigate('Accounts');
}
console.log('accountid', id);
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
                       return <Picker.Item key={index} label={`${account.account_type}...
                                    ${account.account_id.substring(account.account_id.length - 5)}
                                    $(${account.balance})`} value={fromAccount.account_id}/>
                }): <Picker.Item label='No accounts available'></Picker.Item>}
                 </Picker>
                 <Text>TO</Text>
            <TextInput
                placeholder=''
                style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10, width: '80vw'}}
                keyboardType = 'default'
                onChangeText={(value) =>
                    dispatch(changeAccountId(value))
                }
                value={id}
                >

            </TextInput>
            <Button onPress={submitTransfer} title='Submit'/>
        </View>
    );
}

export default OwnTransfer;