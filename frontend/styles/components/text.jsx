import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import variables from '../utils/variables';

export default StyleSheet.create({

    mainTitle: {
        color: variables.color.veryLight,
        fontSize: 30,
        //fontWeight: 'bold'
    },

    mainTitleContainer: {
        //flex: 0.3,
        //flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    }
})