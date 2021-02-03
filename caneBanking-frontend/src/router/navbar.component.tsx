import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { CaneBankingState } from '../store/store';
import styles from '../../global-styles';
import I18n, { strings } from '../../i18n';
import { changeLocale } from '../store/actions';

function NavBarComponent() {
    const nav = useNavigation();
    const user = useSelector((state: CaneBankingState) => state.user);
    const locale = useSelector((state: CaneBankingState) => state.locale);
    const application = useSelector((state: CaneBankingState) => state.application);
    const transaction = useSelector((state: CaneBankingState) => state.transaction);
    const dispatch = useDispatch();

    // dispatch(changeLocale('en')); // infinite re-render
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
