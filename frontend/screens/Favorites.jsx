import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import * as Speech from 'expo-speech';

import Pictogram from "../components/Pictogram.jsx";
import ModalPopup from "../components/ModalPopup.jsx";
import Popup from "../components/Popup.jsx";
import UserService from '../services/UserService.jsx';
import style from '../styles/screens/favorites.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import soundIcon from '../images/sound.png';
import deleteIcon from '../images/delete.png';
import singlePictogramIcon from '../images/singlePictogram.png';
import multiplePictogramIcon from '../images/multiplePictogram.png';

// for now, need to refresh the page to see the updates
function Favorites({route}) {

    const [currentState, setCurrentState] = useState("sentence");
    const [allFavSentences, setAllFavSentences] = useState([]);
    const [favPicto, setFavPicto] = useState([]);
    const [userId, setUserId] = useState(null);
    const [canDeleteFavPicto, setCanDeleteFavPicto] = useState(0);
    const [canDeleteFavSentence, setCanDeleteFavSentence] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [popupId, setPopupId] = useState();
    const [confirmPopupAction, setConfirmPopupAction] = useState(() => {});
    var deleteSentenceId;
    var deleteFavPicto;

    const isAdmin = route.params.isAdmin;

    useEffect(() =>{
        const retrieveId = async () => {
            try {
                const id = await AsyncStorage.getItem("@user_id");
                const canDeleteFavPicto = await AsyncStorage.getItem("@can_delete_fav_picto");
                const canDeleteFavSentence = await AsyncStorage.getItem("@can_delete_fav_sentence");
                if (id !== null){
                    setUserId(JSON.parse(id));
                    setCanDeleteFavPicto(Boolean(JSON.parse(canDeleteFavPicto)));
                    setCanDeleteFavSentence(Boolean(JSON.parse(canDeleteFavSentence)));
                }
            } catch(error) {
                console.log("An error occured retrieving current user");
            }
        }       
        retrieveId();
    }, []);

    useEffect(function loadFavPicto(){
        UserService.getUserFavPicto(userId).then((response) => {
            setFavPicto(response.data);
        }).catch((err) => {
            console.log("Failed to get fav images: " + err);
        });
    }, [userId]);

    useEffect(function loadFavSentences(){
        UserService.getFavSentences(userId).then((response) => {
            if (response.data.length !== 0){
                recreateSentences(response.data);
            }
        }).catch((err) => {
            console.error("Failed to get fav sentences: " + err);
        });
    }, [userId]);

    let recreateSentences = function(data){
        var favSentences = [];
        var currentSentence = [];
        var currentId = data[0].idSentence;

        for (var i = 0; i < data.length; i++){
            if (data[i].idSentence != currentId){
                favSentences.push(currentSentence);
                currentId = data[i].idSentence
                currentSentence = [];
            }
            currentSentence.push(data[i]);
        }
        favSentences.push(currentSentence);

        setAllFavSentences(favSentences);
    }

    let getDeleteFavSentenceDialog = function(idSentence) {
        deleteSentenceId = idSentence;
        if(Platform.OS === 'web') {
            Popup(true, "Supprimer", "Supprimer cette phrase des favoris ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                { 
                    text: "OK",
                    onPress: () => handleRemoveFavSentence()
                }
            ])
        } else {
            setIsModalVisible(true);
            setPopupId("delete");
            setConfirmPopupAction(() => handleRemoveFavSentence);
        }
    };

    let getDeleteFavPictoDialog = function(picto) {
        deleteFavPicto = picto;
        if(Platform.OS === 'web') {
            Popup(true, "Supprimer", "Supprimer ce pictogramme des favoris ?", [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                { 
                    text: "OK",
                    onPress: () => handleRemoveFavPicto()
                }
            ])
        } else {
            setIsModalVisible(true);
            setPopupId("delete");
            setConfirmPopupAction(() => handleRemoveFavPicto);
        }
    };

    let handleRemoveFavSentence = function(){
        UserService.deleteFavSentence(userId, deleteSentenceId).then((response) => {
            removeSentenceFromDisplay(deleteSentenceId);
            setIsModalVisible(true);
            setPopupId("done");
        }).catch((err) => {
           console.error("Failed to delete sentence " + deleteSentenceId + " from fav: " + err);
        });  
    }

    let handleRemoveFavPicto = function() {
        setFavPicto(oldArray => [...oldArray.filter(item => item !== deleteFavPicto)]);

        UserService.deleteFavPicto(userId, deleteFavPicto.id).then((response) => {
            setIsModalVisible(true);
            setPopupId("done");
        }).catch((err) => {
           console.error("Failed to delete picto from fav: " + err);
        });
    }

    let removeSentenceFromDisplay = function(idSentence){
        const newArray = allFavSentences.filter(function(sentence) { 
            return sentence[0].idSentence !== idSentence
        });
        setAllFavSentences(newArray);
    }

    let handleReadSentence = function(sentence){
        for (let i = 0; i < sentence.length; i++) {
            readWord(sentence[i].name)
        }
    }

    let handleReadWord = function(word){
        readWord(word.name);
    }

    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    return (
        <View style={globalStyle.mainContainer}>
            { userId === null && 
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Favoris</Text>
                    </View>
                    <View style={style.messageContainer}>
                        <Text style={style.message}>Aucun utilisateur n'a été sélectionné !</Text>
                    </View>
                </View>
            }
            {userId !== null && 
                <View style={globalStyle.mainContainer}>
                    <View style = {style.buttonChoiceContainer}>
                <TouchableOpacity style={style.buttonChoice} onPress={() => setCurrentState("sentence")}>
                    <Image source={multiplePictogramIcon} style={style.buttonChoiceImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonChoice} onPress={() => setCurrentState("pictogram")}>
                    <Image source={singlePictogramIcon} style={style.buttonChoiceImage}/>
                </TouchableOpacity>
            </View>
            { currentState === "sentence" &&
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Phrases favorites</Text>
                    </View>
                    <View style={style.container}>
                        { allFavSentences.length == 0 &&
                            <View style={style.messageContainer}>
                                <Text style={style.message}>Aucune phrase n'a encore été ajoutée en favori !</Text>
                            </View>
                        }
                        { allFavSentences.length != 0 &&
                            <FlatList 
                            data={allFavSentences} 
                            keyExtractor={(item) => item[0].idSentence.toString()}
                            renderItem={({item})=> 
                                <View style={style.sentenceContainer}>
                                    <FlatList
                                        numColumns={10}
                                        data={item}
                                        keyExtractor={(item) => item.idPicto.toString()}
                                        renderItem={({item}) => 
                                            <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                        }
                                    />
                                    <View style={style.buttonContainer}>
                                        <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadSentence(item)}}>
                                            <Image source={soundIcon} style={globalStyle.buttonImage}/>
                                        </TouchableOpacity>
                                        { (isAdmin || canDeleteFavSentence) &&
                                            <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavSentenceDialog(item[0].idSentence)}}>
                                                <Image source={deleteIcon} style={globalStyle.deleteImage}/>
                                            </TouchableOpacity>
                                        }  
                                    </View>
                                </View>
                            }/>
                        }
                    </View>
                </View>
            }

            { currentState === "pictogram" &&
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Pictogrammes favoris</Text>
                    </View>
                    <View style={style.container}>
                        {favPicto.length == 0 &&
                            <View style={style.messageContainer}>
                                <Text style={style.message}>Aucun pictogramme n'a encore été ajouté en favori !</Text>
                            </View>
                        }
                        { favPicto.length != 0 &&
                            <FlatList 
                            data={favPicto} 
                            numColumns={3}
                            contentContainerStyle={style.pictogramFlatList}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item})=> 
                                <View style={style.pictogramContainer}>
                                    <Pictogram picto={item} isTouchable={false} id={"favScreen"}/>
                                    <View style={style.buttonContainer}>
                                        <TouchableOpacity style={[globalStyle.readButton, style.button]} onPress={() => {handleReadWord(item)}}>
                                            <Image source={soundIcon} style={globalStyle.buttonImage}/>
                                        </TouchableOpacity>
                                        { (isAdmin || canDeleteFavPicto) &&
                                            <TouchableOpacity style={[globalStyle.deleteButton, style.button]} onPress={() => {getDeleteFavPictoDialog(item)}}>
                                                <Image source={deleteIcon} style={globalStyle.deleteImage}/>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            }/>
                        }
                    </View>
                </View>
            }
                </View>
            }
            

            {Platform.OS !== 'web' ?
                <ModalPopup visible={isModalVisible} setIsModalVisible={setIsModalVisible} id={popupId} confirmAction={confirmPopupAction}></ModalPopup>
                :
                null
            }
        </View>
    )
}

export default Favorites;