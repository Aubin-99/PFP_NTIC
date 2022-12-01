import { StyleSheet, Dimensions } from 'react-native';
import variables from '../utils/variables.jsx';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

const style =  StyleSheet.create({
    
    /** Main containers **/
        topContainer: {
            flex: 2,
            flexDirection: 'row',
            //minHeight: 100
        },
        
        botContainer: {
            flex: 8,
            flexDirection: 'row',
            //marginTop: 10,
            marginBottom: screenHeight *0.16,
            //minHeight: 100
        },

    /** Top **/
        selectedPictoContainer: {
            flex: 8,
            flexDirection: 'row',
            //marginTop: 10,
            justifyContent: 'space-between',
            alignItems: "center",
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 60,
            paddingLeft: 30,
            paddingRight: 30,
            //padding: 10
        },

        buttonsContainer:{
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: 150
        },

        addButtonContainer:{
            alignItems: 'center'
        },

        backButtonContainer:{
            //alignItems: 'center'
        },

        button: {
            //border: "1px solid black",
            flex: 1,
            margin: 5,
            height: "100%",
            maxHeight: 80
        },

        favButton: {
            margin: 5,
            height: screenHeight*0.1,
            width: screenWidth*0.06,
        },

        returnButton: {
            margin: 5,
            height: 80,
            width: 80
        },

    /** Bot **/
        favPictoContainer: {
            //flex: 0.11,
            //flexDirection: 'column',
            marginTop: 10,
            padding: 20,
            //justifyContent: 'center',
            //alignItems: 'center',
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 50
        },

        pictoContainer: {
            flex: 1,
            justifyContent: 'center',
            marginTop: 10,
            marginLeft: 15,
            borderColor: variables.color.veryLight,
            borderWidth: 2,
            borderRadius: 30,
            padding: 15,
        },

        pictoList: {
            //flex: 1,
            justifyContent: 'space-evenly',
            //flexWrap:'wrap'
        },
        
        messageContainer: {
            marginTop: 50
        },
    
        message: {
            fontSize: 15,
            textAlign: "center"
        }

    /* */

});

export default style;