import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { clearStorage } from '../services/AuthenticationService.jsx';
import { useIsFocused } from '@react-navigation/native';


let disconnect = async function(){
    await clearStorage();
}

function Logout({route, navigation}) {

    const isAdmin = route.params.isAdmin;
    const isFocused = useIsFocused();

    useEffect(() => {
        disconnect();
        if (isAdmin) {
            navigation.navigate("LogIn");
        } else {
            navigation.navigate("Users");
        }
        if(isFocused){ 
            getInitialData();
        }
    },[isFocused]);

    const getInitialData = async () => {};

    return (
        <View>
            <Text></Text>
        </View>
        
    );
}

export default Logout;