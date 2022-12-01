import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import devURL from "../utils/developmentURL";

import pictoStyle from '../styles/components/pictogram.jsx';
import listPictoStyle from '../styles/components/listPictogram.jsx';
import favPictoStyle from '../styles/components/favPictogram.jsx';
import selectedPictoStyle from '../styles/components/selectedPictogram.jsx';
import favScreenPictoStyle from '../styles/components/favScreenPictogram.jsx';
import categoriesPictoStyle from '../styles/components/categoriesPicto.jsx';

function Pictogram(props) {

    const picto = props.picto;
    const isTouchable = props.isTouchable;
    const id = props.id;
    const isAddingToFav = props.isAddingToFav;
    const canAddToFav = props.canAddToFav;
    const isPredicted = props.isPredicted;

    var style;

    switch (id) {
        case "list":
            style = listPictoStyle;
            break;
        case "categories":
            style = categoriesPictoStyle;
            break;
        case "fav":
            style = favPictoStyle;
            break;
        case "selected":
            style = selectedPictoStyle;
            break;
        case "favScreen":
            style = favScreenPictoStyle;
            break;
        default:
            style = listPictoStyle;
    }

    if (isTouchable && isAddingToFav && !canAddToFav) {
        return (
            <TouchableOpacity style={[pictoStyle.mainContainer, style.mainContainer]} disabled={true}>
                <Image source={{uri: `${devURL}/${picto.url}`}} style={pictoStyle.disabledImage}/>
            </TouchableOpacity>
        )
    } else if(id=="fav"){
        return (
            <TouchableOpacity style={[pictoStyle.mainContainer, style.mainContainer]} disabled={!isTouchable}
                            onPress={() => props.onPressHandler(picto)} onLongPress={() => props.onLongPress(picto)}>
                <Image source={{uri: `${devURL}/${picto.url}`}} style={[pictoStyle.image, style.image]}/>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={[pictoStyle.mainContainer, style.mainContainer]} disabled={!isTouchable}
                            onPress={() => props.onPressHandler(picto)}>
                <Image source={{uri: `${devURL}/${picto.url}`}} style={isPredicted ? pictoStyle.imagePredict : [pictoStyle.image, style.image]}/>
            </TouchableOpacity>
        )
    }

}

export default Pictogram;