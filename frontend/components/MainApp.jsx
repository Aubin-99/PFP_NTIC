import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "../navigations/BottomTab.jsx";

import globalStyle from '../styles/components/global.jsx';

function MainApp({route}) {

    const isAdmin = route.params.isAdmin;

    return (
       /* <View style={globalStyle.body}>*/
            //<View style={globalStyle.mainContainer}>
                <Tabs isAdmin={isAdmin}/>
            //</View>
        /*</View>*/
    );
}

export default MainApp;