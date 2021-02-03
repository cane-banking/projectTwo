import  React, { useEffect}  from 'react';
import { View, TextInput,Text, Button,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeApplication, getUser } from '../store/actions';
import { CaneBankingState, UserState } from '../store/store';
import  {Application} from './application';
import applicationService from './application.service';
import styles from '../../global-styles';
import {v4 as uuid4} from 'uuid';
import { color } from '../helpers/colorScheme';
import userService from '../user/user.service';
//import { format } from "date-fns";

interface ApplicationProp {
    navigation: any;
}
//export class SwitchExample extends Component <any, any>{  
//    state = {  
//        choosenIndex: 0  
//    };  
//}
export function CreateApplication(this: any, {navigation}: ApplicationProp) {
    const application = useSelector((state: CaneBankingState) => state.application);
    const dispatch = useDispatch();
    const userSelector = (state: UserState) => state.user;
    const user = useSelector(userSelector);

    useEffect(() => {
        userService.login(user).then((user) => {
            dispatch(getUser(user));
        });
        console.log(user)
    }, [dispatch])
    

    function submitCreateApplication() {
        application.application_id = uuid4();
        application.firstname = user.firstname;
        application.lastname = user.lastname;
        var date = new Date();
        application.applicationdate = date;
        application.applicationstatus = 'pending';
        application.customer_id = user.customer_id;


        applicationService.addApplication(application).then(() => {
            dispatch(changeApplication(new Application()));
        })
    }
    
    return (
        <View style={styles.container}>  
            <TextInput
                placeholder='Social Security Number'
                style={styles.input}
                onChangeText={(value) => 
                    dispatch(changeApplication({ ...application, socialsecurity: value}))
                }
                value= {application.socialsecurity}
                />
            
            <TextInput
                placeholder='Checking / Savings / CreditCard'
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
                value={application.address}
                />
            
            <TextInput
                placeholder='Date of Birth'
                style={styles.input}
                onChangeText={(value) =>
                    dispatch(changeApplication({ ...application, dateofbirth: value}))
                    
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