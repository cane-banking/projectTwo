import  React, { useEffect, useState }  from 'react';
import { View, TextInput, Button, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeFromAccount, changeToAccount, changeTransferAmount } from '../store/actions';
import { CaneBankingState } from '../store/store';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';
import {v4 as uuidv4} from 'uuid';
import addTransactionService from './addTransaction.service';
import getAccountService from '../account/getAccount.service';


interface Deposit {
    navigation: any;
}

function OwnTransfer({navigation}: Deposit) {
    const transaction = useSelector((state: CaneBankingState) => state.transaction);
    const user = useSelector((state: CaneBankingState) => state.user);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const transferAmount = useSelector((state: CaneBankingState) => state.transferAmount);
    const dispatch = useDispatch();
    const [accountId, setAccount_Id] = useState('');

    useEffect(()=> {
       if(accounts){
           dispatch(changeAccount(accounts[0].account_id))
       }
    },[user]);

function submitTransfer(){
    getAccountService.getAccount(accountId).then((account1)=>{
        account.balance = account.balance - transferAmount;
        account1[0].balance = account1[0].balance + transferAmount;

        AccountService.addDeposit(account).then(()=>{
            AccountService.addDeposit(account1[0]).then(()=>{
                dispatch(changeFromAccount(''));
                dispatch(changeToAccount(''));
            })
        })
    })

    transaction.transaction_id = uuidv4();
    transaction.time_stamp = new Date();
    transaction.transaction_amt = transferAmount;
    transaction.account_id = accountId;
    transaction.customer_id = user.customer_id;
    transaction.vendor = 'transfer'
    transaction.vendor_account_id = uuidv4();

    addTransactionService.addTransaction(transaction).then(()=>{})
    navigation.navigate('Accounts');
}
    return (
        <View>
            <Text>FROM</Text>
            <Picker style={{width:'100%', padding: 10}}
                        selectedValue={account.account_id}
                        onValueChange={(itemValue, itemIndex) => {dispatch(changeAccount(itemValue.toString()))}}>
                    {accounts ? accounts.map((account, index) => {
                        return <Picker.Item key={index} label={`${account.account_type}...
                                        ${account.account_id.substring(account.account_id.length - 5)}
                                        $(${account.balance})`} value={account.account_id}/>
                    }): <Picker.Item label='No accounts available'></Picker.Item>}
                 </Picker>
                 <Text>TO</Text>
            <TextInput
                placeholder=''
                style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10, width: '80vw'}}
                keyboardType = 'default'
                onChangeText={(value) => {
                    setAccount_Id(value)
                    dispatch(changeToAccount(value))
                }}
                defaultValue=''
                value={accountId}
                >
            </TextInput>
            <Text style={style.label}>Amount</Text>
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
            {transferAmount > account.balance ? <Text style={style.label}>Insufficient Funds.</Text> : <Button onPress={submitTransfer} title='Submit'/>}
        </View>
    );
}

export default OwnTransfer;