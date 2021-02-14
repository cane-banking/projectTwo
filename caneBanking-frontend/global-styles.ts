import {StyleSheet} from 'react-native';

const { create } = require('react-native-pixel-perfect');
const designResolution = {
    width: 1125,
    height: 2436
}
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
        color: '#756262',
        fontFamily: 'Helvetica',
        fontSize: 18,
        fontWeight: 'bold'
    },
    regularText: {
        color: '#756262',
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginBottom: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
//        fontSize: '18px',
          fontSize: 18,
        fontFamily: 'poppins'
    },
    screen: {
        padding: 15,
        height: '100%'
    },
    input: {
        color: 'black',
        backgroundColor: '#c4c4c4',
        borderRadius: 10,
        marginTop: 12,
        marginBottom: 12,
        height: 35,
        width: 250,
        padding: 15
    },
    login: {
        backgroundColor: '#f5feff',
        marginBottom: 60,
        justifyContent: 'center',
        alignItems:'center'
    },
    logo: {
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
    create: {
        margin: 20,
        alignSelf: 'stretch'
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    appitem: {
        fontFamily: 'Helvetica',
        marginBottom: 24,
        padding: 30,
        backgroundColor: '#63D4FF',
        fontSize: 12
    },
    card: {
        backgroundColor: color.white,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: color.lightGray,
        color: color.lightBlue
    },
    apptitle: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'capitalize',
        color: color.lightBlue,
        marginBottom: 10
    },
    applicant: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#756262'
    },
    transaction: {
        fontSize: 21,
        color: color.darkGray
    },
    transactioncard: {
        backgroundColor: color.white,
        borderWidth: 0,
        borderRadius: 20,
        borderColor: color.lightGray,
        color: color.lightBlue
    },
    xlabel: {

    }
});

export default styles;