import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { addCheck, changeAccount, changeCheck, getAccounts, getUser } from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Check } from './check';
import checkService from './check.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';


interface Deposit {
    navigation: any;
}

function DepositCheck({navigation}: Deposit) {
    const check = useSelector((state: CaneBankingState) => state.check);
    const user = useSelector((state: CaneBankingState) => state.user);
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log('hey! user', user);
        AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
            dispatch(getAccounts(accounts));
        })
    }, [user])


    function submitCheckDeposit() {
        check.check_id = uuidv4();
        check.check_date = getDate();
        check.account_id = account.account_id;
        check.customer_id = user.customer_id
        check.firstname = user.firstname
        check.lastname = user.lastname
        checkService.addCheck(check).then(() => {
            dispatch(changeCheck(new Check()));
            navigation.navigate('Accounts');
        })
    }

    return (
        <View style={[style.login, style.screen]}>
            <Image source={require('../check/cameraIcon.png')}/>
            <Text style={style.screenHeader}>Enter deposit details.</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: color.darkGray}}>
                <Text style={style.label}>Deposit to</Text>
                <Picker style={{width:'100%', padding: 10}}
                        selectedValue={account.account_id}
                        onValueChange={() => {dispatch(changeAccount(account.account_id))}}>
                {accounts ? accounts.map(account => {
                        <Picker.Item label={`${account.account_type}...
                                    ${account.account_id.substring(account.account_id.length - 5)}
                                    $(${account.balance})`} value={account.account_type}/>
                }): <Picker.Item label='You have no accounts registered.'></Picker.Item>}
                 </Picker>
            </View>
            <Text style={style.label}>Enter Amount</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10}}>$</Text>
                <TextInput
                    placeholder='$0.00'
                    style={{fontSize: 55, color:color.lightBlue, borderBottomWidth: 1, borderBottomColor: color.darkGray, padding: 10, width: '80vw'}}
                    keyboardType = 'numeric'
                    onChangeText={(value) =>
                        dispatch(changeCheck({ ...check, amount: Number(value)}))
                    }
                    value={check.amount.toString()}
                    >
                </TextInput>
            </View>
            <Text style={style.label}>Take Photos</Text>
            <View style={style.row}>

            <TouchableHighlight onPress={()=> ''} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                <Image source={{uri: 'https://lh3.googleusercontent.com/proxy/0FTUMzf9xLrG607NlB-CWcnBpRgw4qPgLqGNC7Owhq9nWFFJs0fEwVMyNHg5UCZe2n_YuHMZCUJQFR7MqOoroDQB55Dvo8TPcL3smJ_DV5MrOHetXOGPYq75tlqMseGNDdQ2mqfp5FkoKFOGn6BWc6aWJdtiPKkJSG6Wgx4hLw2rPYwd6LSVs8_FKFBCZ-OczMSatA'}}
       style={{width: 50, height: 50, marginTop: 20}} />
                    <Text style={style.checkPhotoText}>Front of check</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> ''} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                <Image source={{uri: 'https://lh3.googleusercontent.com/proxy/0FTUMzf9xLrG607NlB-CWcnBpRgw4qPgLqGNC7Owhq9nWFFJs0fEwVMyNHg5UCZe2n_YuHMZCUJQFR7MqOoroDQB55Dvo8TPcL3smJ_DV5MrOHetXOGPYq75tlqMseGNDdQ2mqfp5FkoKFOGn6BWc6aWJdtiPKkJSG6Wgx4hLw2rPYwd6LSVs8_FKFBCZ-OczMSatA'}}
       style={{width: 50, height: 50, marginTop: 20}} />
                    <Text style={style.checkPhotoText}>Back of check</Text>
                </View>
            </TouchableHighlight>
            </View>
            <Button onPress={submitCheckDeposit} title={`Deposit $${check.amount}`} color={color.lightBlue} />
        </View>
    );
}

export default DepositCheck;