import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { UserState } from '../store/store';
import styles from '../../global-styles';

function NavBarComponent() {
    const nav = useNavigation();
    const user = useSelector((state: UserState) => state.user);

    // dispatch(changeLocale('en')); // infinite re-render
    return (
        <View style={styles.header}>
           <View>
               <Text style={styles.headerText}></Text>
           </View>
        </View>
    );
}


export default NavBarComponent;
