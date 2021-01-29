import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../global-styles';
import { getUser} from '../store/actions';
import { UserState } from '../store/store';
import signupService from './signup.service';
import { User } from './user';
import { v4 as uuid4 } from 'uuid';

interface SignupProp {
    navigation: any;
}

export default function SignUpComponent({ navigation }: SignupProp) {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    /* const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const checkValidation = () => {
        setConfirmPassword(e.target.value)
        if(password !== confirmPassword){
            setIsError("passwords don't match")
        } else {
            setIsError("");
        }
    } */

    function createAccount(){
        user.customer_id= uuid4();
        user.role='customer';
        signupService.addUser(user).then(() => {
            dispatch(getUser(new User()));
            navigation.navigate('Login');
        });
    }

    return (
        <View style={[style.container, style.login]}>
           <Text style={style.boldText}>sign up for an account</Text>
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
             {/* <TextInput
                    secureTextEntry={true}
                    placeholder='password'
                    style={style.input}
                    onChangeText={(e: any) => setPassword(e.target.value)}
                    value={password}
                />
            <Text style={style.regularText}>confirm password</Text>
            <TextInput
                    secureTextEntry={true}
                    placeholder='confirm password'
                    style={style.input}
                    onChangeText={(e: any) => checkValidation(e)}
                    value={confirmPassword}
                />
            <Text style={style.regularText}>{isError}</Text> */}
                <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
       </View>
    )
}
