import  React, { useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { addCheck, changeCheck } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Check } from './check';
import checkService from './check.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


interface Deposit {
    navigation: any;
}

// useEffect(()=> {

// })

function DepositCheck({navigation}: Deposit) {
    const check = useSelector((state: CaneBankingState) => state.check);
    const dispatch = useDispatch();


    function submitCheckDeposit() {
        check.check_id = uuidv4();
        check.check_date = getDate();
        check.account_id = '12456'; //account.account_id
        check.customer_id = '123'; //customer.customer_id
        check.firstname = 'Bobby';//customer.firstname
        check.lastname = 'Terry';//customer.lastname
        check.amount = 123;
        checkService.addCheck(check).then(() => {
            dispatch(changeCheck(new Check()));
            navigation.navigate('Accounts');
        })
    }

    //checkid, date, amount
    return (
        <View style={[style.login, style.screen]}>
            <Text style={style.screenHeader}>Enter deposit details.</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10}}>
                <Text style={style.label}>Deposit to</Text>
                <Text style={{color: color.lightBlue, fontWeight: 'bold'}}>⃝Checking...5015 ($1234.56)</Text>
                <Text style={{color: color.lightBlue, fontWeight: 'bold'}}>⃝Savings...7788 ($345.67)</Text>
            {/* take array of accounts and map out here        */}
            </View>
            <Text style={style.label}>Enter Amount</Text>
            <TextInput
                placeholder='$0.00'
                style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10}}
                keyboardType = 'numeric'
                onChangeText={(value) =>
                    dispatch(changeCheck({ ...check, amount: Number(value)}))
                }
                value={check.amount.toString()}
                >
            </TextInput>
            <Text style={style.label}>Take Photos</Text>
            <View style={style.row}>

            <TouchableHighlight onPress={()=> ''} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                    <Text style={style.checkPhotoText}>Front of check</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> ''} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                    <Text style={style.checkPhotoText}>Back of check</Text>
                </View>
            </TouchableHighlight>
            </View>
                {/* <Button onPress={()=> ''} title='Front of check' color='#63D4FF'></Button>
                <Button onPress={()=> ''} title='Back of check' color='#63D4FF'></Button> */}
            <Button onPress={submitCheckDeposit} title={`Deposit $${check.amount}`} color={color.lightBlue} />
        </View>
    );
}

export default DepositCheck;