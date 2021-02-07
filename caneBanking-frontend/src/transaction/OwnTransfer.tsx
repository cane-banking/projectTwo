import  React, { useEffect }  from 'react';
import { View, TextInput, Button, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeFromAccount, changeToAccount, changeTransferAmount, getAccounts} from '../store/actions';
import { CaneBankingState } from '../store/store';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';
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
        if(accounts){
            dispatch(changeFromAccount(accounts[0].account_id));
            dispatch(changeToAccount(accounts[1].account_id));
        }
    }, [user])

    console.log('toAccount', toAccount);
    console.log('fromAccount', fromAccount);
function submitTransfer(){
    fromAccount.balance = fromAccount.balance - transferAmount;
    toAccount.balance = toAccount.balance + transferAmount;
    AccountService.addDeposit(fromAccount).then(()=>{
        AccountService.addDeposit(toAccount).then(()=>{
            AccountService.getAccountsByCustomer(user.customer_id).then((accounts)=> {
                dispatch(getAccounts(accounts));
                dispatch(changeTransferAmount(0));
            })
        })
    })

    transaction.transaction_id = uuidv4();
    transaction.time_stamp = new Date();
    transaction.transaction_amt = transferAmount;
    transaction.account_id = toAccount.account_id;
    transaction.customer_id = user.customer_id;
    transaction.vendor = 'transfer'
    transaction.vendor_account_id = uuidv4();

    addTransactionService.addTransaction(transaction).then(()=>{})
    navigation.navigate('Accounts');
}
    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10}}>$</Text>
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
            </View>
            <Text>FROM</Text>
            <Picker style={{width:'100%', padding: 10}}
                        selectedValue={fromAccount.account_id}
                        onValueChange={(itemValue) => {dispatch(changeFromAccount(itemValue.toString()))}}>
                {accounts ? accounts.map((account, index) => {
                       return <Picker.Item key={index} label={`${account.account_type}...
                                    ${account.account_id.substring(account.account_id.length - 5)}
                                    $(${account.balance})`} value={account.account_id}/>
                }): <Picker.Item label='No accounts available'></Picker.Item>}
                 </Picker>
                 <Text>TO</Text>
            <Picker style={{width:'100%', padding: 10}}
                        selectedValue={toAccount.account_id}
                        onValueChange={(itemValue) => {dispatch(changeToAccount(itemValue.toString()))}}>
                {accounts ? accounts.map((account, index) => {
                       return <Picker.Item key={index} label={`${account.account_type}...
                                    ${account.account_id.substring(account.account_id.length - 5)}
                                    $(${account.balance})`} value={account.account_id}/>
                }): <Picker.Item label='No accounts available'></Picker.Item>}
            </Picker>
            {transferAmount > fromAccount.balance ? <Text>Insufficient Funds.</Text> : <Button onPress={submitTransfer} title='Submit'/>}
        </View>
    );
}

export default OwnTransfer;