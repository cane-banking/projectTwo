import  React, { useState, Component }  from 'react';
import { View, TextInput,Text, Button,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeApplication } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import  {Application} from './application';
import applicationService from './application.service';
import styles, { color } from '../../global-styles';
import {v4 as uuid4} from 'uuid';
<<<<<<< HEAD:caneBanking-frontend/src/application/application-component.tsx
//import { format } from "date-fns";
=======
import { color } from '../helpers/colorScheme';

>>>>>>> c22371e220709f37e0b9fc17316848c197c34282:caneBanking-frontend/src/accounts/application-component.tsx

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
            navigation.navigate('Accounts');
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
<<<<<<< HEAD:caneBanking-frontend/src/application/application-component.tsx

=======
>>>>>>> c22371e220709f37e0b9fc17316848c197c34282:caneBanking-frontend/src/accounts/application-component.tsx
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

<<<<<<< HEAD:caneBanking-frontend/src/application/application-component.tsx
/*
<TextInput
    placeholder='balance'
    style={style.input}
    keyboardType = 'numeric'
    onChangeText={(value) =>
    dispatch(changeAccount({ ...account, balance: value}))
    }
    value= {account.balance}
    >
</TextInput>
    <view>
                <RNPickerSelect

                    placeholder= {{
                        label: 'Select An Account',
                        value: null,

                    }}
                    onValueChange={(value: any) => console.log(value)}
                    items={[
                        { label: 'Checking Account', value: 'Checking Account' },
                        { label: 'Saving Account', value: 'Saving Account' },
                        { label: 'Credit Card Account', value: 'Credit Card Account' },
                    ]}
                />
    </view>
*/
=======
>>>>>>> c22371e220709f37e0b9fc17316848c197c34282:caneBanking-frontend/src/accounts/application-component.tsx
