import { StyleSheet, Dimensions } from 'react-native';
import globalStyle from '../components/global.jsx';
import variables from '../utils/variables.jsx';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

const style = StyleSheet.create({

    container: {
        flex: 1,
        //flexDirection: 'column',
        marginBottom: 110
    },

    sentenceContainer: {
        //flex: 1,
        borderColor: variables.color.veryLight,
        borderWidth: 2,
        borderRadius: 35,
        //minHeight: 120,
        marginVertical: 10,
        paddingHorizontal: 25,
        //justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    pictogramContainer: {
        flex: 3,
        borderColor: variables.color.veryLight,
        borderWidth: 2,
        borderRadius: 35,
        margin: 10,
        maxWidth: screenWidth*0.28,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    buttonContainer: {
        flexDirection: 'row'
    },

    button: {
        height: screenHeight * 0.06,
        width:  screenHeight * 0.06,
        marginLeft: 10
    },

    buttonChoiceContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    buttonChoice: {
        height: screenHeight * 0.1,
        width:  screenHeight * 0.1,
        marginHorizontal: screenWidth * 0.10,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        elevation: 10
    },

    buttonChoiceImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        opacity: 0.8,
    },

    messageContainer: {
        marginTop: 50
    },

    message: {
        fontSize: 15,
        textAlign: "center"
    }
})

export default style;
