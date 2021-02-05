import React, { useEffect } from 'react';
import { View,
        Text,
        TouchableHighlight,
        FlatList,
        Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccount, changeApplication, getAccounts, getUser } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import AccountService from './account.service';
import styles, { color } from '../../global-styles';
import { Card, Divider, Icon } from 'react-native-elements';
import userService from '../user/user.service';
import { Application } from '../application/application';


interface AccountProp {
  navigation: any;
}

export default function Accounts({navigation}:AccountProp) {
    const userSelector = (state: UserState) => state.user;
    const accounts = useSelector((state: CaneBankingState) => state.accounts);
    const account = useSelector((state: CaneBankingState) => state.account);
    const user = useSelector(userSelector);
    const dispatch = useDispatch()


    useEffect(()=> {

        dispatch(changeApplication(new Application()));

        userService.login(user).then((user) => {
            dispatch(getUser(user))
        });


      AccountService.getAccountsByCustomer(user.customer_id).then((accounts) => {
          dispatch(getAccounts(accounts));
      })
  }, [user])

  console.log(accounts)

  function selectAccount() {
    navigation.navigate('TransactionHistory');
  }

  return (
    <View>

      <View style={styles.heading}>
        <Text style={styles.boldText}>Welcome to your accounts {user.firstname}</Text>
      </View>

      <FlatList
            keyExtractor={(item) => item.account_id}
            data={accounts}
            renderItem={({ item }) =>(
              <>

              <Card containerStyle={styles.card}>

                <Text style={styles.apptitle}>{item.account_type}</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

                  <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.applicant}>${item.balance}</Text>
                  </View>

                </View>

                <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                  <Button onPress={selectAccount} title={item.account_id} color='#63D4FF' />

                </View>



              </Card>

            </>

            )}
        />

        {/* <View>
          <Icon name="plus" size={50}/>
        </View> */}

      </View>
  );
}

