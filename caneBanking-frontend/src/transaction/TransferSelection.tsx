import  React from 'react';
import { View, Button, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style, {color} from '../../global-styles';
import { getTransferSelection } from '../store/actions';
import { CaneBankingState } from '../store/store';


interface Deposit {
    navigation: any;
}

function TransferSelection({navigation}: Deposit) {
    const accounts = useSelector((state: CaneBankingState) => state.accounts);

    return (
        <View>
            <Text style={[style.screenHeader, style.screen]}>Transfer to.</Text>
            {accounts.length >= 2 ?
            <Button onPress={()=> {
                getTransferSelection('Own');
                navigation.navigate('OwnTransfer')
                return;
            }} title='Own Account'/> : ''}

            <Button onPress={()=> {
                getTransferSelection('Other');
                navigation.navigate('OtherTransfer')
                return;
            }} title='Cane Banking User'/>
        </View>
    );
}

export default TransferSelection;