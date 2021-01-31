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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5feff',
    },
    input: {
        color: 'black',
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        marginBottom: 20,
        height: 30,
        width: 200,
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
    }
});

export default styles;