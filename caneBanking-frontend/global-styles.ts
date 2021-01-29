import {SnapshotViewIOSComponent, StyleSheet} from 'react-native';


// Importing using require because there is no @types
const { create } = require('react-native-pixel-perfect');
const designResolution = {
    width: 1125,
    height: 2436
} // what we're designing for
const perfectSize = create(designResolution);

export const color = {
    white: '#ffffff',
    black: '#000000',
    lightBlue: '#63D4FF',
    darkGray: '#5b5e5e',
    lightGray: '#d3d3d3',
    background: '#f5feff',
    inputBackground: '#c4c4c4'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
    },
    input: {
        color: color.black,
        backgroundColor: color.inputBackground,
        borderRadius: 20,
        marginBottom: 20,
        height: 30,
        width: 200,
    },
    login: {
        backgroundColor: color.background
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
    }
});

export default styles;