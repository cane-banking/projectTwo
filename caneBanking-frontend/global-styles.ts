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
    boldText: {
        fontFamily: 'Helvetica',
        fontSize: 18,
        fontWeight: 'bold'
    },
    regularText: {
        fontFamily: 'Helvetica',
        fontSize: 14
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
        fontSize: '18px',
        fontFamily: 'poppins'
    },
    input: {
        color: color.black,
        backgroundColor: color.inputBackground,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    checkPhoto: {
        marginBottom: 30,
        width: 170,
        height: 130,
        alignItems: 'center',
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.lightGray,
        borderRadius: 10

    },
    checkPhotoText: {
        textAlign: 'center',
        padding: 10,
        color: color.darkGray,
        textDecorationLine: 'underline'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.darkGray,
        padding: 15
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