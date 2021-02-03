import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../global-styles';
import { ApplicationState, CaneBankingState, UserState } from '../store/store';
import { thunkGetApps } from '../store/thunks';
import declineService from './decline.service';
import {getUser, newAccount} from '../store/actions'
import userService from '../user/user.service';
import approveappService from './approveapp.service';
import { v4 as uuidv4 } from 'uuid';
import {Account} from '../account/account';
import newaccountService from './newaccount.service';


export default function Admin() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    const selectApplication = (state: ApplicationState) => state.applications;
    const applications = useSelector(selectApplication);

    const account = useSelector((state: CaneBankingState) => state.account);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(thunkGetApps());

      userService.login(user).then((user) => {
        dispatch(getUser(user));
      });
    }, [dispatch]);

    function approveApp(aid: string, type: string, cid: string){
      account.account_id = uuidv4();
      account.account_type = type;
      account.customer_id = cid;

      newaccountService.addAccount(account).then(() => {
        dispatch(newAccount(new Account()));
      });

      approveappService.updateApplication(aid).then(() => {
        dispatch(thunkGetApps());
      });

    }

    function denyApp(id: string){
      declineService.updateApplication(id).then(() => {
        dispatch(thunkGetApps());
      });
    }
    
  return (
    <View>

        <View style={styles.heading}>
          <Text style={styles.boldText}>Pending Applications</Text>
        </View>

        <FlatList 
            keyExtractor={(item) => item.application_id}
            data={applications}
            renderItem={({ item }) =>(
              <>
              {item.applicationstatus === 'pending' && (
              <Card containerStyle={styles.card}>
                
                  
                <Text style={styles.apptitle}>{item.accounttype}</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.regularText}>{item.socialsecurity}</Text>
                    <Text style={styles.regularText}>{item.dateofbirth}</Text>
                    <Text style={styles.regularText}>{item.address}</Text>
                  </View>
                 
                  <View style={{flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.applicant}>{item.firstname} {item.lastname}</Text>
                    {/* <Text style={styles.applicant}>{item.applicationdate}</Text> */}
                  </View>

                </View>

                <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                  <Button onPress={() => denyApp(item.application_id)} title='Decline' color='#63D4FF' />
                  <Button onPress={() => approveApp(item.application_id, item.accounttype, item.customer_id)} title='Approve' color='#63D4FF' />
                  
                </View>
                
                
        
              </Card>
            )}
            </>

            )}
        />


    </View>

  );
}