import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { getUser} from '../store/actions';
import { UserState } from '../store/store';
import { User } from './user';
import userService from './user.service';

interface SignupProp {
    navigation: any;
}

export default function SignUpComponent({ navigation }: SignupProp) {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function createAccount(){
        user.role='customer'
        userService.addUser(user).then(() => {
            dispatch(getUser(new User()));
            navigation.navigate('Login');
        });
    }

    return (
        <View style={[style.container, style.login]}>
           <Text>sign up for an account</Text>
            <TextInput
                    placeholder='username'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, username: value }))
                    }
                    value={user.username}
                />
             <TextInput
                    placeholder='email'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, email: value }))
                    }
                    value={user.email}
                />
             <TextInput
                    placeholder='first name'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, firstname: value }))
                    }
                    value={user.firstname}
                />
             <TextInput
                    placeholder='last name'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, lastname: value }))
                    }
                    value={user.lastname}
                />
             <TextInput
                    secureTextEntry={true}
                    placeholder='password'
                    style={style.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, password: value }))
                    }
                    value={user.password}
                />
                <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
       </View>
    )
}
