import React from 'react';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser} from '../store/actions';
import {
    Button,
    View
} from 'react-native';
import { User } from './user';
import style from '../../global-styles';

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
            navigation.navigate('Login');
    }

    return (
        <View style={style.container}>
   
                <Button onPress={logout} title='Logout' color='#63D4FF' />

        </View>
    );
}

export default Logout;