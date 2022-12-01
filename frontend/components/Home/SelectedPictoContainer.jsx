import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';

import Pictogram from "../Pictogram.jsx";

import style from '../../styles/screens/home.jsx';

function SelectedPictoContainer(props) {

    const selectedPictoArray = props.selectedPictoArray;

    return (
        <View style={style.selectedPictoContainer}>
            <FlatList
                numColumns={14}
                data={selectedPictoArray}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Pictogram picto={item} isTouchable={false} id={"selected"}/>}/>
        </View>
    )
}

export default SelectedPictoContainer;