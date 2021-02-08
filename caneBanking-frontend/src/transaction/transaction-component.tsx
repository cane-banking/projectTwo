import  React, { useEffect }  from 'react';
import { View,Text, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../store/actions';
import { CaneBankingState} from '../store/store';
import transactionService from './transaction.service';
import { Card, Divider} from 'react-native-elements';
import styles, { color } from '../../global-styles';
import { getDate } from '../helpers/date';


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
              <View style={styles.heading}>
                  <Text style={styles.boldText}>{account.account_type} {account.account_id.substring(account.account_id.length - 5)}</Text>
                  <Text style={{fontSize: 55, color: color.lightBlue}}>${account.balance}</Text>
                  <Text>Available balance as of {getDate()}</Text>
              </View>
            {transactions.length ? (
              <>
                <FlatList
                  keyExtractor={(item) => item.transaction_id}
                  data={transactions}
                  renderItem={({ item }) =>(
                <>
                <Card>
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={[styles.transaction, {fontWeight: 'bold', color: color.darkGray}]}>{item.vendor}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.transaction}>${item.transaction_amt}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                      <Text style={styles.transaction}>{item.time_stamp}</Text>
                    </View>
                  </View>
                  <Divider style={{backgroundColor: color.darkGray, marginVertical:20}} />
                </Card>
                </>
                )}
                />
              </>
              ) :  (
              <View>
                <View style={styles.heading}>
                  <Text style={styles.boldText}>You have not made any transactions.</Text>
                </View>
              </View>
            )}
          </View>
    );
}

export default TransactionHistory;

