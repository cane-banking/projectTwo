import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser} from '../store/actions';
import { UserState } from '../store/store';
import signupService from './signup.service';
import { User } from './user';
import { v4 as uuid4 } from 'uuid';
import signupdynamoService from './signupdynamo.service';
import styles from '../../global-styles';

interface SignupProp {
    navigation: any;
}

export default function SignUpComponent({ navigation }: SignupProp) {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function createAccount(){
        if(password !== confirmPassword){
            Alert.alert('INVALID', 'passwords must match', [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
            alert('passwords must match');
        } else{
        user.customer_id = uuid4();
        user.password = password;
        user.role='customer';
        signupService.addUser(user).then(() => {
            dispatch(getUser(new User()));
        });

        signupdynamoService.addUser(user).then(() => {
            dispatch(getUser(new User()));
            navigation.navigate('Login');
        });
        }
    }

    return (
        <View style={[styles.container, styles.login]}>
            <View style={styles.heading}>
                <Text style={styles.boldText}>sign up for an account</Text>
            </View>
            <TextInput
                    placeholder='username'
                    style={styles.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, username: value }))
                    }
                    value={user.username}
            />
            <TextInput
                    placeholder='email'
                    style={styles.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, email: value }))
                    }
                    value={user.email}
            />
            <TextInput
                    placeholder='first name'
                    style={styles.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, firstname: value }))
                    }
                    value={user.firstname}
            />
            <TextInput
                    placeholder='last name'
                    style={styles.input}
                    onChangeText={(value) =>
                        dispatch(getUser({ ...user, lastname: value }))
                    }
                    value={user.lastname}
            />
            <TextInput
                    secureTextEntry={true}
                    placeholder='password'
                    style={styles.input}
                    onChangeText={(value) => setPassword(value)}
                    value={password}
            />
            <Text style={styles.regularText}>confirm password</Text>
            <TextInput
                    secureTextEntry={true}
                    placeholder='confirm password'
                    style={styles.input}
                    onChangeText={(value) => setConfirmPassword(value)}
                    value={confirmPassword}
            />
            <View style={styles.create}>
                <Button onPress={createAccount} title='Create Account' color='#63D4FF' />
            </View>
       </View>
    )
}
