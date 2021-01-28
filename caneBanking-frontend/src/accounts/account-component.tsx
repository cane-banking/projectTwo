import  React  from 'react';
import { View, TextInput, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { changeCheck, changeAccount } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Account } from './account';
import accountService from './account.service';
import  Picker  from '@react-native-picker/picker';

interface AccountType {
    navigation: any;
}

function CreateAccount({navigation}: AccountType) {
    const account = useSelector((state: CaneBankingState) => state.account);
    const dispatch = useDispatch();

    function submitCreateAccount() {
        accountService.addAccount(account).then(() => {
            dispatch(changeAccount(new Account()));
        })
    }

    return (
        <View>
            <TextInput
                placeholder='amount'
                style={style.input}
                keyboardType = 'numeric'
                onChangeText={(value) =>
                    dispatch(changeCheck({ ...account, amount: value}))
                }
                value={account.amount}
                >
            </TextInput>
            <Button onPress={submitCreateAccount} title='Submit' color='fff' />
        </View>
    );
}

export default CreateAccount;