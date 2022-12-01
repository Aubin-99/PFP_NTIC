import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    submitButton: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0B0D6',
        borderRadius: 20,
        height: 40,
        width: 140,
        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})