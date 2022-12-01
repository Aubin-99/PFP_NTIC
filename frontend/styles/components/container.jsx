import { StyleSheet, Dimensions } from 'react-native';
import variables from '../utils/variables.jsx';

const dimWindow = Dimensions.get("window");

export default StyleSheet.create({  

    mainContainer: {
        //border: "3px solid purple",
        flex: 1,
        backgroundColor: variables.color.mid,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        //paddingBottom: 15
        //height: "100%"
    },
})