import React from 'react';
import userService from './user.service';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../store/actions';
import {
    Button,
    TextInput,
    Text,
    View,
    Image
} from 'react-native';
import style from '../../global-styles';


interface LoginProp {
    navigation: any;
}

function LoginComponent({ navigation }: LoginProp) {
    const userSelector = (state: UserState) => state.loginUser;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function submitForm() {
        userService.login(user).then((user) => {
            dispatch(getUser(user));
            if(user.role === 'customer'){
            navigation.navigate('Accounts');
            } else {
                navigation.navigate('Admin');
            }
        });
    }

    function createAccount() {
            navigation.navigate('Register');
    }

    return (
        <View style={style.container}>
            <View style={style.heading}>
                <Text style={style.boldText}>Take care of your financial needs today</Text>
            </View>
            <View style ={style.login}>
                <TextInput
                    placeholder='username'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.username}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(loginAction({ ...user, password: value }))
                    }
                    value={user.password}
                />
                <Button onPress={submitForm} title='Login' color='#63D4FF' />
            </View>
            <Image
                style={{width: 325, height: 261, marginBottom: 20}}
                source={require('./undraw_Savings_re_eq4w (2).svg')}
            />
            <Text style={style.boldText}>New Customer?</Text>
            <View style={style.create}>
                <Button onPress={createAccount} title='Sign Up' color='#63D4FF' />
            </View>
        </View>
    );
}

export default LoginComponent;
