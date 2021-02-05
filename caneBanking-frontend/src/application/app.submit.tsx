import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../global-styles'

export default function AppSubmit() {
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Thank you! Your request is being processed</Text>
        </View>
    )
}
