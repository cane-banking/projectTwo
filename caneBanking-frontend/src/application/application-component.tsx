import  React, { useEffect, useState }  from 'react';
import { View, TextInput,Text, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeApplication, getUser } from '../store/actions';
import { ApplicationState, UserState } from '../store/store';
import  {Application} from './application';
import applicationService from './application.service';
import styles, { color } from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import { Account } from '../account/account';


interface ApplicationProp {
    navigation: any;
}

export function CreateApplication(this: any, {navigation}: ApplicationProp) {
    const [click, setClick] = useState(false)

    const application = useSelector((state: ApplicationState) => state.application);
    const dispatch = useDispatch();
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    function submitCreateApplication() {
        application.application_id = uuid4();
        application.firstname = user.firstname;
        application.lastname = user.lastname;
        var date = new Date();
        //application.applicationdate = date;
        application.applicationstatus = 'pending';
        application.customer_id = user.customer_id;

        applicationService.addApplication(application).then(() => {
            dispatch(changeApplication(new Application()));
            navigation.navigate(Account)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.boldText}>Create a bank account</Text>
            </View>

             <TextInput
                placeholder='Social Security Number'
                secureTextEntry={true}
                keyboardType = 'numeric'
                maxLength={9}
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(changeApplication({ ...application, socialsecurity: value}))
                }
                value= {application.socialsecurity}
                />

            <TextInput
                placeholder='Checking / Savings / Credit'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(changeApplication({ ...application, accounttype: value}))
                }
                value={application.accounttype}
                />


            <TextInput
                placeholder='Address'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(changeApplication({ ...application, address: value}))
                }
                value={application.address || ''}
                />

            <TextInput
                placeholder='Date of Birth: MM/DD/YYYY'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(changeApplication({ ...application, dateofbirth: value}))

                    }
                    value={application.dateofbirth || ''}
                    />

                <View style={styles.create}>
                    <Button onPress={submitCreateApplication} title='Create Account' color={color.lightBlue} />
                </View>

                {click ? (
                    <View style={styles.heading}>
                        <Text style={styles.boldText}>Thank you! Your request is being processed</Text>
                    </View>
                    ) : (null)}

        </View>
    );
}

export default CreateApplication;

