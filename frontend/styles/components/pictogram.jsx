import { StyleSheet } from 'react-native';
import variables from '../utils/variables';

const image = {
    borderWidth: 3,
    resizeMode: 'contain',
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 20
}

export default StyleSheet.create({

    mainContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
        //flexDirection: 'row'
    },

    image: {
        borderColor: variables.color.dark,
        ...image
    },
    imagePredict: {
        borderColor: "yellow",
        ...image
    },
    
    disabledImage : {
        opacity: 0.5,
        ...image
    }
})