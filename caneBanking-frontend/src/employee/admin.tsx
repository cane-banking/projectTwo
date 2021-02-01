import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../global-styles';
import { getApplications} from '../store/actions';
import { ApplicationState, UserState } from '../store/store';
import { thunkGetApps } from '../store/thunks';
import adminService from './admin.service';
import AppComponent from './app.component';


export default function Admin() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    const selectApplication = (state: ApplicationState) => state.applications;
    const applications = useSelector(selectApplication);

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(thunkGetApps());
    }, [dispatch]);
    console.log(applications)

    function approveApp(){

    }

    function denyApp(){

    }
    
  return (
    <View style={styles.container}>

        <View style={styles.heading}>
          <Text style={styles.boldText}>Pending Applications</Text>
        </View>

        <FlatList 
            keyExtractor={(item) => item.application_id}
            data={applications}
            renderItem={({ item }) =>(
                <Text style={styles.appitem}>
                    Applicant: {item.firstname} {item.lastname}
                    Type: {item.accounttype}
                    <Button onPress={approveApp} title='Approve' color='#63D4FF' />
                    <Button onPress={denyApp} title='Deny' color='#63D4FF' />
                </Text>
            )}
        />

        
        

    </View>

  );
}