import React from 'react';
import { Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './screens/Login.jsx';
import Users from './screens/Users.jsx';
import MainApp from './components/MainApp.jsx';
import Register from './screens/Register.jsx';
import PictoUpload from './screens/PictoUpload.jsx';

function App() {
    const Stack = createStackNavigator();
    return (
        <SafeAreaProvider style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: Platform.OS === "android" ? 25 : 0
              
        }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Users"} screenOptions={{ headerShown: false, gestureEnabled: false}}>
                    <Stack.Screen name="LogIn" component={LogIn}/>
                    <Stack.Screen name="Users" component = {Users} initialParams = {{ isLogged:false }} options = {{ unmountOnBlur: true }}/>
                    <Stack.Screen name="MainApp" component={MainApp}/>
                    <Stack.Screen name="Register" component={Register}/>
                    <Stack.Screen name="PictoUpload" component={PictoUpload}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;