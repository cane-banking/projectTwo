import  React, { useState }  from 'react';
import { View, TextInput, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { changeAccount } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Account } from './account';
import accountService from './account.service';
import  Picker  from '@react-native-picker/picker';
import styles from '../../global-styles';
//import { Dropdown } from 'react-native-material-dropdown';
import {v4 as uuidv4} from 'uuid';

interface AccountType {
    navigation: any;
}

function CreateAccount({navigation}: AccountType) {
    const account = useSelector((state: CaneBankingState) => state.account);
    const dispatch = useDispatch();

    function submitCreateAccount() {
        account.account_id = uuidv4();
        accountService.addAccount(account).then(() => {
            dispatch(changeAccount(new Account()));
        })
    }
    const data = [{
        value: "Checking Account",
    }, {
        value: "Saving Account",
    }, {
        value: "Credit Card",

    }];

    return (
        <View>
            {/* <Dropdown
                label='Create Account'
                data = {data}
            /> */}
            <Button onPress={submitCreateAccount} title='Submit' color='fff' />
        </View>
    );
}

export default CreateAccount;

/*
<TextInput
    placeholder='balance'
    style={style.input}
    keyboardType = 'numeric'
    onChangeText={(value) =>
    dispatch(changeAccount({ ...account, balance: value}))
    }
    value= {account.balance}
    >
</TextInput>
*/