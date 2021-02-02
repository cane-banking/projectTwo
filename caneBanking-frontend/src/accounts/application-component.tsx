import  React, { useState, Component }  from 'react';
import { View, TextInput,Text, Button,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeApplication } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import  {Application} from './application';
import applicationService from './application.service';
import styles from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import { color } from '../helpers/colorScheme';


interface ApplicationProp {
    navigation: any;
}

export function CreateApplication(this: any, {navigation}: ApplicationProp) {
    const application = useSelector((state: CaneBankingState) => state.application);
    const dispatch = useDispatch();
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    function submitCreateApplication() {
        application.application_id = uuid4();
        application.firstname = user.firstname;
        application.lastname = user.lastname;
        var date = new Date();
        application.applicationdate = date;
        application.applicationstatus = 'pending';
        application.customer_id = user.customer_id;
        
        applicationService.addApplication(application).then(() => {
            dispatch(ChangeApplication(new Application()));
        })
    }
    
    return (
        <View style={styles.container}>  
            <TextInput
                placeholder='Social Security Number'
                secureTextEntry={true}
                keyboardType = 'numeric'
                maxLength={9}
                style={styles.input}
                onChangeText={(value) => 
                    dispatch(ChangeApplication({ ...application, socialsecurity: value}))
                }
                value= {application.socialsecurity}
                />
            
            <TextInput
                placeholder='Checking/Saving/CreditCard'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(ChangeApplication({ ...application, accounttype: value}))
                }
                value={application.accounttype}
                />
            
   
            <TextInput
                placeholder='Address'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(ChangeApplication({ ...application, address: value}))
                }
                value={application.address}
                />
            
            <TextInput
                placeholder='Date of Birth: MM/DD/YYYY'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(ChangeApplication({ ...application, dateofbirth: value}))
                }
                value={application.dateofbirth}
                />
            
                <View style={styles.create}>
                    <Button onPress={submitCreateApplication} title='Create Application' color={color.lightBlue} />
                </View>
        </View>
    );
}

export default CreateApplication;

