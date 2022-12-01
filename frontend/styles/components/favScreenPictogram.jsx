import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

export default StyleSheet.create({

    mainContainer : {
        height: screenHeight * 0.08,
        width:  screenHeight * 0.08,
        margin: 10
    }
})