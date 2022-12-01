import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({

    mainContainer : {
        //flex: 0.07,
        margin : 2,
        height: screenHeight*0.075,
        width: screenWidth*0.048,
    }
})