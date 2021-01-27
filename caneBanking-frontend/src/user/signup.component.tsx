import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { loginAction } from '../store/actions';
import { UserState } from '../store/store';

interface SignupProp {
    navigation: any;
}

export default function SignUpComponent({ navigation }: SignupProp) {
    const userSelector = (state: UserState) => state.loginUser;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function createAccount(){
        return
    }

    return (
        <View style={[style.container, style.login]}>
           <Text>sign up for an account</Text>
            <TextInput
                    placeholder='username'
                    style={style.input}
                    onChangeText={(value) =>
                        // change loginAction
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.username}
                />
             <TextInput
                    placeholder='password'
                    style={style.input}
                    onChangeText={(value) =>
                        // change loginAction
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.password}
                />
             <TextInput
                    placeholder='first name'
                    style={style.input}
                    onChangeText={(value) =>
                        // change loginAction
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.username}
                />
             <TextInput
                    placeholder='last name'
                    style={style.input}
                    onChangeText={(value) =>
                        // change loginAction
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.username}
                />
             <TextInput
                    placeholder='password'
                    style={style.input}
                    onChangeText={(value) =>
                        // change loginAction
                        dispatch(loginAction({ ...user, username: value }))
                    }
                    value={user.username}
                />
                <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
       </View>
    )
}
