import {SnapshotViewIOSComponent, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// Importing using require because there is no @types
const { create } = require('react-native-pixel-perfect');
const designResolution = {
    width: 1125,
    height: 2436
} // what we're designing for
const perfectSize = create(designResolution);

const styles = StyleSheet.create({
    boldText: {
        color: '#756262',
        fontFamily: 'Helvetica',
        fontSize: 18,
        fontWeight: 'bold'
    },
    regularText: {
        color: '#756262',
        fontFamily: 'Helvetica',
        fontSize: 14
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5feff',
        fontSize: '18px',
        fontFamily: 'poppins'
    },
    input: {
        color: 'black',
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        marginTop: 12,
        marginBottom: 12,
        height: 35,
        width: 250,
    },
    login: {
        backgroundColor: '#f5feff'
    },
    logo: {
        // perfectSize is only going to call when the app is first loaded in the device.
        width: perfectSize(840),
        height: perfectSize(840)
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    create: {
        margin: 20,
        alignSelf: 'stretch'
    },
    heading: {
        marginBottom: 10,
        marginTop: 10
    },
    appitem: {
        fontFamily: 'Helvetica',
        marginBottom: 24,
        padding: 30,
        backgroundColor: '#63D4FF',
        fontSize: 12
    }
});

export default styles;