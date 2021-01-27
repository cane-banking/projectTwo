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

    useEffect(() => {
        // Check to see if we're already logged in. Redirect if we are.
        userService
            .getLogin()
            .then((loggedUser) => {
                dispatch(getUser(loggedUser));
                navigation.navigate('Accounts');
                console.log(loggedUser)
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

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
            <Text>Don't have an account?</Text>
            <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
           
        </View>
    );
}

export default LoginComponent;
