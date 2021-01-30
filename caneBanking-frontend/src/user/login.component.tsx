import React, { useEffect } from 'react';
import userService from './user.service';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../store/actions';
import {
    Button,
    TextInput,
    Text,
    View,
} from 'react-native';
import style from '../../global-styles';

// Function Component
interface LoginProp {
    navigation: any;
}
function LoginComponent({ navigation }: LoginProp) {
    const userSelector = (state: UserState) => state.loginUser;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();


    function submitForm() {
        userService.login(user).then((user) => {
            console.log('user submit form', user);
            dispatch(getUser(user));
            navigation.navigate('Accounts');
        });
    }

    function createAccount() {
            navigation.navigate('Register');
    }

    return (
        <View style={[style.container, style.login]}>
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
            <Text style={style.boldText}>Don't have an account?</Text>
            <View style={style.create}>
                <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
            </View>

        </View>
    );
}

export default LoginComponent;
