import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeCheck, getAccounts, getUser } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Transaction} from './transaction';
import TransactionService from './addTransaction.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';



interface Deposit {
    navigation: any;
}

function newTransaction({navigation}: Deposit) {
    const transaction = useSelector((state: CaneBankingState) => state.transaction);
    const user = useSelector((state: CaneBankingState) => state.user);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const dispatch = useDispatch();



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
                }): <Picker.Item label='You have no accounts registered.'></Picker.Item>}
                 </Picker>
        </View>
    );
}

export default newTransaction;