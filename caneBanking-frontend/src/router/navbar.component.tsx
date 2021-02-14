import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch} from 'react-redux';
import styles from '../../global-styles';
import I18n from '../../i18n';
import { changeLocale } from '../store/actions';

function NavBarComponent() {
    const nav = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={styles.row}>
            {I18n.locale === 'fr' ? (
                <Button
                    onPress={() => {
                        I18n.locale = 'en';
                        dispatch(changeLocale('en'))
                    }}
                    title='EN'
                />
            ) : (
                <Button
                    onPress={() => {
                        I18n.locale = 'fr';
                        dispatch(changeLocale('fr'))
                    }}
                    title='FR'
                />
            )}
            <Button
                onPress={() => {
                    nav.navigate('DepositCheck');
                }}
                title='Deposit A Check'
            />

            <Button
                onPress={() => {
                    nav.navigate('CreateApplication');
                }}
                title='Create An Application'
            />
            <Button
                onPress={() => {
                    nav.navigate('TransactionHistory');
                }}
                title='Transaction History'
            />

        </View>
    );
}

export default NavBarComponent;
