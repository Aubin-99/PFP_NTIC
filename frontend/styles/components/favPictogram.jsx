import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({

    mainContainer: {
        margin : 5,
        height: screenHeight*0.1,
        width: screenWidth*0.06,
    }
})