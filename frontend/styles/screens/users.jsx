import { StyleSheet, Dimensions } from 'react-native';

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
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 100,
        backgroundColor: '#2a9d8F',
    },

    modalView: {
        margin: 20,
        backgroundColor: "#2a9d8F",
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
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

    title: {
        fontSize: screenHeight * 0.05,
        marginBottom: 5,
        textAlign: 'center',
        color: 'white', 
        fontWeight: 'bold'
    },

    buttonContainer: {
        marginVertical: 10
    },

    userItem: {
        marginVertical: 10,
        flexDirection: 'row'
    },

    userButton:{
        flex: 8,
        padding: 10,
        borderRadius: 35,
        marginHorizontal: 10,
        backgroundColor: '#34c3eb',
        alignItems:'center',
        elevation: 10
    },

    userButtonNotLogged:{
        flex: 8,
        padding: 5,
        borderRadius: 35,
        backgroundColor: '#F0B0D6',
        alignItems:'center',
        justifyContent:'center',
        elevation: 10,
        marginVertical: 10
    },

    buttonText: {
        fontSize: screenHeight * 0.02,
        padding: 10,
        color: 'white',
    },

    userItem: {
        backgroundColor:'white',
        borderRadius: 35,
        marginVertical: 10,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    adminButton:{
        ...button,
        backgroundColor: '#1675FF',
    }

});