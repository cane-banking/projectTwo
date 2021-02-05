import  React, { SyntheticEvent, useEffect, useState }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeAccountId, changeCheck, changeFromAccount, changeToAccount, changeTransferAmount, getAccounts, getTransferSelection, getUser } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Transaction} from './transaction';
import TransactionService from './addTransaction.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
import { Picker } from '@react-native-picker/picker';
import { Account } from '../account/account';



interface Deposit {
    navigation: any;
}

function TransferSelection({navigation}: Deposit) {
    const transaction = useSelector((state: CaneBankingState) => state.transaction);
    const user = useSelector((state: CaneBankingState) => state.user);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const toAccount = useSelector((state: CaneBankingState) => state.toAccount);
    const fromAccount = useSelector((state: CaneBankingState) => state.fromAccount);
    const transferAmount = useSelector((state: CaneBankingState) => state.transferAmount);
    const dispatch = useDispatch();
    const selection = useSelector((state: CaneBankingState) => state.selection);



    return (
        <View>
            <Text>Transfer to.</Text>
            <Button onPress={()=> {
                getTransferSelection('Own');
                navigation.navigate('OwnTransfer')
                return;
            }} title='Own Account'/>
            <Button onPress={()=> {
                getTransferSelection('Other');
                navigation.navigate('OtherTransfer')
                return;
            }} title='Cane Banking User'/>
            {/* <Button onPress={submitSelection} title='Select'/>


            <TouchableHighlight onPress={()=> getTransferSelection('Own') } underlayColor={color.white} >
                <View style={style.checkPhoto}>
                    <Text style={style.checkPhotoText}>Own Account</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> getTransferSelection('Other')} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                    <Text style={style.checkPhotoText}>Cane Banking User</Text>
                </View>
            </TouchableHighlight> */}
            {/* <Button onPress={submitSelection} title='Select'/> */}
        </View>
    );
}

export default TransferSelection;