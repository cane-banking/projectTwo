import React, { useEffect } from 'react';
import userService from './user.service';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../store/actions';
import {
    Platform,
    Button,
    TextInput,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableHighlight,
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
            console.log(user);
            dispatch(getUser(user));
            navigation.navigate('Accounts');
        });
    }
    function handle() {
        alert('why?');
    }
    function longHandle(){
        alert('long press');
    }
    return (
        <View style={[style.container, style.login]}>
            <Text>Username: </Text>
            <TextInput
                style={style.input}
                onChangeText={(value) =>
                    dispatch(loginAction({ ...user, username: value }))
                }
                value={user.username}
            />
            <Text>Password: </Text>
            <TextInput
                secureTextEntry={true}
                style={style.input}
                onChangeText={(value) =>
                    dispatch(loginAction({ ...user, password: value }))
                }
                value={user.password}
            />
            <Button onPress={submitForm} title='Login' color='#880022' />
            <Text>{Platform.OS}</Text>
            {Platform.OS === 'android' ? (
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View>
                        <Text>OnlyAndroid</Text>
                    </View>
                </TouchableNativeFeedback>
            ) : (
                <TouchableHighlight onPress={handle} underlayColor='white'>
                    <View>
                        <Text>Everyone Else</Text>
                    </View>
                </TouchableHighlight>
            )}
            <TouchableHighlight onLongPress={longHandle} underlayColor='white'>
                <View>
                    <Text>Everyone Else</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
    // TouchableNativeFeedback - Android specific api
    // TouchableHighlight - less specific version
}

export default LoginComponent;
