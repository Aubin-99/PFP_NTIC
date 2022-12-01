import { StyleSheet, Dimensions} from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

const button = {
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 30,
    margin: 10,
    paddingRight: 15,
    paddingLeft: 15,
}

export default StyleSheet.create({
    main_container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: '#2a9d8F',
    },
    form:{
        marginBottom: 10 
    },
    buttonsContainer: {
        margin: 10,
        alignItems:'center',
    },
    signinButton: {
        ...button,
        backgroundColor: '#1675FF',
    },
    userButton: {
        ...button,
        backgroundColor: '#1675FF',
    },
    buttonText: {
        fontSize: screenHeight * 0.023,
        padding: 10,
        color: 'white',
    }
});