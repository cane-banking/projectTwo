import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../global-styles';
import { Application } from '../accounts/application';

interface AppProps {
    data: Application;
}

function AppComponent({data}: AppProps){
    return (
        <View style={styles.container}>
            <Text>{data.application_id}</Text>
            <Text>{data.firstname}</Text>
            <Text>{data.lastname}</Text>
        </View>
    );
}

export default AppComponent;