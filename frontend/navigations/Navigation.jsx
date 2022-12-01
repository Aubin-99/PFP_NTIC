import {createAppContainer} from "react-navigation";
import Confirmation from "../components/Confirmation.jsx";
import Home from "../components/Home.jsx";

import createStackNavigator from "react-native-screens/createNativeStackNavigator";

const SearchStackNavigator = createStackNavigator({
    Confirmation: {
        screen: Confirmation,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
            cardStyle: {backgroundColor: '#2a9d8F'},
        },
    }
})

export default createAppContainer(SearchStackNavigator);