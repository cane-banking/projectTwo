import  React, { useState, Component }  from 'react';
import { View, TextInput,Text, Button,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccount } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Account } from './account';
import accountService from './account.service';
import  Picker  from '@react-native-picker/picker';
import styles from '../../global-styles';
import { Dropdown } from 'react-native-material-dropdown';
import {v4 as uuidv4} from 'uuid';
import RNPickerSelect from 'react-native-picker-select';
import { color } from '../helpers/colorScheme';

interface AccountType {
    navigation: any;
}
//export class SwitchExample extends Component <any, any>{  
//    state = {  
//        choosenIndex: 0  
//    };  
//}
function CreateAccount(this: any, {navigation}: AccountType) {
    const account = useSelector((state: CaneBankingState) => state.account);
    const dispatch = useDispatch();

    function submitCreateAccount() {
        account.account_id = uuidv4();
        accountService.addAccount(account).then(() => {
            dispatch(changeAccount(new Account()));
        })
    }
    const pickerSelectStyles = StyleSheet.create({
          picker: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30, // to ensure the text is never behind the icon
          }
      });
    return (
        <View style={styles.container}>  
            <RNPickerSelect
                placeholder= {{
                    label: 'Select An Account',
                    value: null,
                }}
                onValueChange={(value: any) => console.log(value)}
                items={[
                    { label: 'Checking Account', value: 'Checking Account' },
                    { label: 'Saving Account', value: 'Saving Account' },
                    { label: 'Credit Card Account', value: 'Credit Card Account' },
                ]}
                style={{
                    
                }}
            
            /> 
            <Button onPress={submitCreateAccount} title='Create Account' color={color.lightBlue} />
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