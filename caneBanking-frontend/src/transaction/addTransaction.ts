import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeCheck, getAccounts, getUser } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Transaction} from '../transaction/transaction';
import TransactionService from '../transaction/addTransaction.service';
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
        
       
    );
}

export default newTransaction;