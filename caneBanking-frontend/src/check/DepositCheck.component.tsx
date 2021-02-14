import  React, { SyntheticEvent, useEffect }  from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { changeAccount, changeCheck, getAccounts} from '../store/actions';
import { CaneBankingState } from '../store/store';
import { Check } from './check';
import checkService from './check.service';
import {getDate} from '../helpers/date';
import { v4 as uuidv4 } from 'uuid';
import  AccountService  from '../account/account.service';
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
        AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
            dispatch(getAccounts(accounts));
            accounts.length >= 1 ? dispatch(changeAccount(accounts[0].account_id)) : ''
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
        })

        account.balance = account.balance + check.amount;
        AccountService.addDeposit(account).then(() => {
            AccountService.getAccountsByCustomer(user.customer_id).then((accounts)=> {
                dispatch(getAccounts(accounts));
            })
            navigation.navigate('Accounts');
        })
    }
    return (
        <View style={[style.screen]}>
            <Image source={require('../check/cameraIcon.png')}/>
            <Text style={style.screenHeader}>Enter deposit details.</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: color.darkGray}}>
                <Text style={style.label}>Deposit to</Text>
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
                <Image source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/camera-1721-433501.png'}}
                       style={{width: 50, height: 50, marginTop: 20}} />
                    <Text style={style.checkPhotoText}>Front of check</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> ''} underlayColor={color.white} >
                <View style={style.checkPhoto}>
                <Image source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/camera-1721-433501.png'}}
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