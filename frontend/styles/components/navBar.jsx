import { StyleSheet, Dimensions } from 'react-native';
import variables from '../utils/variables';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({

    label: {
        fontSize: screenHeight * 0.024
    },

    icon: {
        width: screenHeight * 0.07,
        height: screenHeight * 0.07,
        //margin: 50,
        //marginTop: 50
        //resizeMode: 'contain'
    },

    bar: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        height: screenHeight *0.12,
        backgroundColor: variables.color.light2,
        borderRadius: 60,
        borderColor: variables.color.dark1,
        borderTopColor: variables.color.dark1,
        borderWidth: 2,
        borderTopWidth: 2,

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10
    }
})