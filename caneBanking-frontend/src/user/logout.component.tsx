import React from 'react';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser} from '../store/actions';
import {
    Button,
    View,
    Text
} from 'react-native';
import { User } from './user';
import style from '../../global-styles';
import styles from '../../global-styles';

// Function Component
interface Logout {
    navigation: any;
}

function Logout({ navigation }: Logout) {
    const userSelector = (state: UserState) => state.loginUser;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    function logout() {
            dispatch(changeUser(new User()));
            navigation.navigate('---');
    }

    return (
        <View style={style.container}>
             <View style={styles.heading}>
                <Text style={styles.boldText}>Are you sure you want to log out?</Text>
            </View>
            <Button onPress={logout} title='Logout' color='#63D4FF' />

        </View>
    );
}

export default Logout;