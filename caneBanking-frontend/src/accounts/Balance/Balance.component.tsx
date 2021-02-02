import React, { useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableHighlight, Image } from 'react-native';
import style from '../../../global-styles';
import { CaneBankingState, UserState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { checkBalance, getUser, loginAction } from '../../store/actions';
import BalanceService from './Balance.Service';
import Accounts from '../accounts.component';

interface BalanceProp {
    navigation: any;
}
export default function BalanceComponent({ navigation }: BalanceProp) {
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function Balance() {
        accounts.customer_id = user.customer_id
        BalanceService.chkBalance(accounts).then(() => {
            dispatch(checkBalance(accounts));
        })
    }

    return(
        <View > 
        <Button onPress={Balance} title='Check Balance' color='#63D4FF'/> 
        </View>
    )

};


