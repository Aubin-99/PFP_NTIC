import { StyleSheet, Dimensions } from 'react-native';
import variables from '../utils/variables';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({

    mainContainer: {
        //flex: 1/9,
        margin: 10,
        height: screenHeight*0.18,
        width: screenHeight*0.18,
    },

    image: {
        borderColor: variables.color.yellow,
        borderWidth: 4
    }
    
})