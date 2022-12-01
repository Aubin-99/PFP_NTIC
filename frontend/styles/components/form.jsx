import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    title: {
        fontSize: screenHeight * 0.05,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8
    },
    loginButton: {
        backgroundColor: '#F0B0D6',
        alignItems:'center',
        alignSelf: 'center',
        borderRadius: 30
    },
    buttonText: {
        fontSize: screenHeight * 0.023,
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        color: 'white',
    }
});