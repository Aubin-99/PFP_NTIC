import { StyleSheet, Dimensions } from 'react-native';

var screenHeight = Dimensions.get("screen").height;
var screenWidth = Dimensions.get("screen").width;

const button = {
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 70,
    elevation: 10,
}

const modalPopupStyle =  StyleSheet.create({

    container: {
        flex: 0.8,
        width: screenWidth*0.5,
        height: screenHeight*0.5,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    iconButton: {
        ...button,
        backgroundColor: '#10D634',
        width: "60%",
        height: "60%"
    },

    iconImage: {
        resizeMode: 'contain',
        width: "60%",
        height: "60%"
    },

    buttonsContainer: {
        //flex: 2,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    choiceButton: {
        flex: 1,
        margin: 5,
        height: "100%",
        maxHeight: 80
    },

    choiceButtonImage: {
        resizeMode: 'contain',
        width: "80%",
        height: "80%"
    },
});

export default modalPopupStyle;