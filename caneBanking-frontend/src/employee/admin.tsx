import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../global-styles';
import { ApplicationState, CaneBankingState, UserState } from '../store/store';
import { thunkGetApps } from '../store/thunks';
import declineService from './decline.service';
import {changeApplication, getApplications, getUser} from '../store/actions'
import { Application } from '../accounts/application';
import userService from '../user/user.service';
import approveappService from './approveapp.service';
import Accounts from '../accounts/accounts.component';


export default function Admin() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    const selectApplication = (state: ApplicationState) => state.applications;
    const applications = useSelector(selectApplication);

    const application = useSelector((state: CaneBankingState) => state.application);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(thunkGetApps());

      userService.login(user).then((user) => {
        dispatch(getUser(user));
      });
    }, [dispatch]);

    
    
    console.log(applications)

    function approveApp(id: string){
      Accounts.
      approveappService.updateApplication(id).then(() => {
        dispatch(thunkGetApps());
      });

    }

    function denyApp(id: string){
      declineService.updateApplication(id).then(() => {
        dispatch(thunkGetApps());
      });
      console.log(id)
      console.log(applications)
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
                  <Button onPress={() => approveApp(item.application_id)} title='Approve' color='#63D4FF' />
                  
                </View>
                
                
        
              </Card>
            )}
            </>

            )}
        />


    </View>

  );
}