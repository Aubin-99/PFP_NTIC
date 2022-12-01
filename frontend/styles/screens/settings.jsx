import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        backgroundColor: '#2a9d8F',
    },

    container: {
        flex: 1.5,
        flexDirection: 'column',
        marginBottom: 90,
        justifyContent: 'center',

    },
    phrase_container: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems:'center',


    },
    textInput: {
        margin: 10,
        textAlign: 'center',
        height: 50,
        width: 500,
        backgroundColor: '#e0e0e0',
        borderColor: '#000000',
        borderWidth: 0.8,
        borderRadius: 60,
        elevation: 5,
        fontSize: 20,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 150,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})