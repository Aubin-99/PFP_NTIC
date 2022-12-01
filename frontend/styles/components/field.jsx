import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    field: {
        fontSize: screenHeight * 0.023,
        color: 'white',
        fontWeight: 'bold'
    },

    input_area: {
        borderWidth: 1,
        padding: 4,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: screenHeight * 0.021,
        marginBottom: 8
    }
});