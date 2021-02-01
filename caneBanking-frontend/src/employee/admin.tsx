import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../global-styles';
import { getUser } from '../store/actions';
import { UserState } from '../store/store';
import userService from '../user/user.service';


export default function Admin() {
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    const [applications, setApplications] = useState([
        { firstname: 'Johnnie', lastname: 'Irving', application_id: 'c5a6d8c8-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Fatima', lastname: 'Micles', application_id: 'c5a6db0c-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Cythia', lastname: 'Cipriano', application_id: 'c5a6dbfc-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Benton', lastname: 'Saul', application_id: 'c5a6dcc4-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Denese', lastname: 'Eicher', application_id: 'c5a6dd78-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Irene', lastname: 'Gershman', application_id: 'fb5c3a26-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Karen', lastname: 'Copple', application_id: 'fb5c3c88-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Hope', lastname: 'Baynard', application_id: 'fb5c3d6e-6414-11eb-ae93-0242ac130002'},
        { firstname: 'Janay', lastname: 'Cosper', application_id: 'fb5c3e2c-6414-11eb-ae93-0242ac130002'},
    ]);

    const dispatch = useDispatch();

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
                    <Button onPress={approveApp} title='Approve' color='#63D4FF' />
                    <Button onPress={denyApp} title='Deny' color='#63D4FF' />
                </Text>
            )}
        />

    </View>

  );
}