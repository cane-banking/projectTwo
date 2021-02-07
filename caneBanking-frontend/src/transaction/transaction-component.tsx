import  React, { useEffect }  from 'react';
import { View,Text, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../store/actions';
import { CaneBankingState} from '../store/store';
import transactionService from './transaction.service';
import { Card, Divider} from 'react-native-elements';
import styles, { color } from '../../global-styles';


interface TransactionProp {
    navigation: any;
}

export function TransactionHistory(props: TransactionProp) {
    const transactions = useSelector((state: CaneBankingState) => state.transactions);
    const account = useSelector((state: CaneBankingState) => state.account);
    const user = useSelector((state: CaneBankingState) => state.user);
    const dispatch = useDispatch();

    useEffect (() => {
    transactionService.getTransactions(account.account_id).then((transactions) => {
        dispatch(getTransaction(transactions));
    })
    },[user])

    return (
          <View style={styles.container}>
            {transactions.length ? (
              <>
                <View style={styles.heading}>
                  <Text style={styles.boldText}>Transaction History</Text>
                </View>
                <FlatList
                  keyExtractor={(item) => item.transaction_id}
                  data={transactions}
                  renderItem={({ item }) =>(
                <>
                <Card containerStyle={styles.card}>
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Date: {item.time_stamp}</Text>
                    </View>
                  </View>
                  <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Vendor: {item.vendor}</Text>
                    </View>
                  </View>
                  <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.applicant}>Transaction Amount: ${item.transaction_amt}</Text>
                    </View>
                  </View>
                </Card>
                </>
                )}
                />
              </>
              ) :  (
              <View>
                <View style={styles.heading}>
                  <Text style={styles.boldText}>Welcome {user.firstname}, You have not made any transaction yet.</Text>
                </View>
              </View>
            )}
          </View>
    );
}

export default TransactionHistory;

