import {SnapshotViewIOSComponent, StyleSheet} from 'react-native';
import { color } from './src/helpers/colorScheme';

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
        fontFamily: 'poppins',
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
    checkPhoto: {
        marginBottom: 30,
        width: 100,
        height: 100,
        alignItems: 'center',
        backgroundColor: color.white,
        borderWidth: 2,
        borderColor: color.lightGray,
        borderRadius: 10
    },
    checkPhotoText: {
        textAlign: 'center',
        padding: 20,
        color: color.lightGray
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.darkGray
    },
    screenHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.lightBlue
    },
    screen: {
        padding: 15
    },
    create: {
        margin: 20,
        alignSelf: 'stretch'
    },
    heading: {
        marginBottom: 10
    }
});

export default styles;