import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';

import Popup from "../Popup.jsx";
import soundIcon from '../../images/sound.png';
import deleteIcon from '../../images/delete.png';
import favIcon from '../../images/fav.png';
import style from '../../styles/screens/home.jsx';
import globalStyle from '../../styles/components/global.jsx';



function ButtonsContainer(props) {

    const handleReadSentence = props.handleReadSentence;
    const handleRemovePicto = props.handleRemovePicto;
    const setPredictPicto = props.setPredictPicto;
    const setSelectedPictoArray = props.setSelectedPictoArray;
    const handleAddSentenceToFav = props.handleAddSentenceToFav;
    const setIsModalVisible = props.setIsModalVisible;
    const setPopupId = props.setPopupId;
    const setConfirmPopupAction = props.setConfirmPopupAction;

    let getClearSentenceDialog = useCallback(() => {
        if(Platform.OS === 'web') {
            Popup(true, "Supprimer", "Supprimer la phrase actuelle ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                { 
                    text: "OK",
                    onPress: () => setEmptyArrays()
                }
            ])
        } else {
            setIsModalVisible(true);
            setPopupId("delete");
            setConfirmPopupAction(() => setEmptyArrays);
        }
    });

    let setEmptyArrays = function(){
        setSelectedPictoArray([]);
        setPredictPicto([]);
    }


    return (
        <View style={style.buttonsContainer}>
            <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence()}} >
                <Image source={soundIcon} style={globalStyle.buttonImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {handleRemovePicto()}} onLongPress={getClearSentenceDialog}>
                <Image source={deleteIcon} style={globalStyle.deleteImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.favButton, style.button]} onPress={() => {handleAddSentenceToFav()}}>
                <Image source={favIcon} style={globalStyle.buttonImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonsContainer;