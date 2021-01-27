import  React  from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { addCheck, changeCheck } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Check } from './check';
import checkService from './check.service';
import  Picker  from '@react-native-picker/picker';

interface Deposit {
    navigation: any;
}

function DepositCheck({navigation}: Deposit) {
    const check = useSelector((state: CaneBankingState) => state.check);
    const dispatch = useDispatch();

    function submitCheckDeposit() {
        checkService.addCheck(check).then(() => {
            dispatch(changeCheck(new Check()));
        })
    }

    return (
        <View>
            <TextInput
                placeholder='amount'
                style={style.input}
                keyboardType = 'numeric'
                onChangeText={(value) =>
                    dispatch(changeCheck({ ...check, amount: value}))
                }
                value={check.amount}
                >
            </TextInput>
            <Button onPress={submitCheckDeposit} title='Submit' color='fff' />
        </View>
    );
}

export default DepositCheck;