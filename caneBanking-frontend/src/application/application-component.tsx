import  React, { useEffect }  from 'react';
import { View, TextInput,Text, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeApplication, getUser } from '../store/actions';
import { ApplicationState, CaneBankingState, UserState } from '../store/store';
import  {Application} from './application';
import applicationService from './application.service';
import styles, { color } from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import userService from '../user/user.service';
//import { format } from "date-fns";

interface ApplicationProp {
    navigation: any;
}

export function CreateApplication(this: any, {navigation}: ApplicationProp) {
    const application = useSelector((state: CaneBankingState) => state.application);
    const dispatch = useDispatch();
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    useEffect(() => {
        userService.login(user).then((user) => {
            dispatch(getUser(user))
        });
    });

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
            navigation.navigate('Accounts');
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.boldText}>Create a bank account</Text>
            </View>

             <TextInput
                placeholder='Social Security Number'
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
                placeholder='Date of Birth'
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