import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, Text } from 'react-native';

import UserService from '../services/UserService.jsx';
import AlgoService from '../services/AlgoService.jsx';
import ModalPopup from "../components/ModalPopup.jsx";
import PictoContainer from "../components/Home/PictoContainer.jsx";
import FavPictoContainer from "../components/Home/FavPictoContainer.jsx";
import SelectedPictoContainer from "../components/Home/SelectedPictoContainer.jsx";
import ButtonsContainer from "../components/Home/ButtonsContainer.jsx";

import * as Speech from 'expo-speech';

import style from '../styles/screens/home.jsx';
import globalStyle from '../styles/components/global.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { clearWord } from '../utils/clearWord.jsx';


function Home({route}) {

    const [selectedPictoArray, setSelectedPictoArray] = useState([]);
    const [favPicto, setFavPicto] = useState([]);
    const [userId, setUserId] = useState(null);
    const [predictPicto, setPredictPicto] = useState([]);
    const [isAddingToFav, setIsAddingToFav] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [popupId, setPopupId] = useState();
    const [confirmPopupAction, setConfirmPopupAction] = useState(() => {});
    const isAdmin = route.params.isAdmin;
    var deleteFavPicto;

    // useEffect = after every render
    // 2nd argument: "You can tell React to skip applying an effect if certain values haven’t changed between re-renders"
    // if [], only called the first time
    useEffect(() =>{
        const retrieveId = async () => {
            try {
                const id = await AsyncStorage.getItem("@user_id");
                if (id !== null){
                    setUserId(JSON.parse(id));
                }
                 
            } catch(error) {
                console.log("An error occured retrieving current user");
            }
        }       
        retrieveId();
    }, []);

    // useCallBack : "memoïsation", va garder en mémoire les return selon les inputs, opti (2eme argu = les dépendances)
    let selectPictoCallback = useCallback((picto) => {
        addPictoToArray(picto);
        AlgoService.predict(clearWord(picto.name))
        .then((response) => setPredictPicto(response.data.splice(1,response.data.length)))
            .catch((err) => console.log("Failed to predict picto: " + err));
    });

    let addPictoToArray = function(picto) {
        if (selectedPictoArray.length >= 10) {  // Picto max limited to 10
            setIsModalVisible(true);
            setPopupId("forbidden");
        } else {
            setSelectedPictoArray(oldArray => [...oldArray, picto]);
        }
    }

    let getFavPictoCallback = function(data){
        setFavPicto(data);
    };

    let onAddPictoToFav = function(picto){
        setFavPicto(oldArray => [...oldArray, picto]);
        setIsAddingToFav(false);
    }

    let onDeleteFavPicto = function() {
        setFavPicto(oldArray => [...oldArray.filter(item => item !== deleteFavPicto)]);

        UserService.deleteFavPicto(userId, deleteFavPicto.id).then((response) => {
            setIsModalVisible(true);
            setPopupId("done");
        }).catch((err) => {
           console.error("Failed to delete picto from fav: " + err);
        });
    }

    let handleAddPictoToFav = useCallback(() => {
        setIsAddingToFav(!isAddingToFav);
    });

    let setDeleteFavPicto = function(picto){
        deleteFavPicto = picto;
    };


    // Buttons actions
    let handleReadSentence = function(){
        for (let i = 0; i < selectedPictoArray.length; i++) {
            readWord(selectedPictoArray[i].name);
        }
    }

    let handleRemovePicto = function(){
        removeLastPicto();
        setPredictPicto([]);
        stopReading();
    }

    let removeLastPicto = function() {
        setSelectedPictoArray(oldArray => [...oldArray.slice(0, oldArray.length - 1)]);
    }

    let handleAddSentenceToFav = function(){
        if (selectedPictoArray.length < 2) {
            setIsModalVisible(true);
            setPopupId("forbidden");
            return;
        }
        addSentenceToFav();
    }

    let addSentenceToFav = function() {
        UserService.addFavSentence(userId, selectedPictoArray).then((response) => {
            setIsModalVisible(true);
            setPopupId("done");
        }).catch((err) => {
           console.error("Failed to add sentence to fav: " + err);
        });
    }


    // Speech
    let readWord = function(word) {
        Speech.speak(word, {language: 'fr'})
    }

    let stopReading = function(){
        Speech.stop();
    }

    return (
        <View style={globalStyle.mainContainer}>
            {userId === null &&
                <View style={globalStyle.mainContainer}>
                    <View style={globalStyle.mainTitleContainer}>
                        <Text style={globalStyle.mainTitle}>Accueil</Text>
                    </View>
                    <View style={style.messageContainer}>
                        <Text style={style.message}>Aucun utilisateur n'a été sélectionné !</Text>
                    </View>
                </View>
            }
            {userId !== null &&
                <View style={globalStyle.mainContainer}>
                    {/* Sentence bar + buttons */}
                    <View style={style.topContainer}>
                        <SelectedPictoContainer selectedPictoArray={selectedPictoArray}>
                        </SelectedPictoContainer>
                        <ButtonsContainer handleReadSentence={handleReadSentence}
                                        handleRemovePicto={handleRemovePicto}
                                        setSelectedPictoArray={setSelectedPictoArray}
                                        setPredictPicto={setPredictPicto}
                                        handleAddSentenceToFav={handleAddSentenceToFav}
                                        setIsModalVisible={setIsModalVisible} setPopupId={setPopupId} setConfirmPopupAction={setConfirmPopupAction}>
                        </ButtonsContainer>
                        
                    </View>

                    {Platform.OS !== 'web' ?
                        <ModalPopup visible={isModalVisible} setIsModalVisible={setIsModalVisible} id={popupId} confirmAction={confirmPopupAction}></ModalPopup>
                        :
                        null
                    }
                    <View style={style.botContainer}>
                        <FavPictoContainer favPicto={favPicto} isAddingToFav={isAddingToFav} userId={userId}
                                        getFavPictoCallback={getFavPictoCallback}
                                        selectPictoCallback={selectPictoCallback}
                                        onDeleteFavPicto={onDeleteFavPicto}
                                        handleAddPictoToFav={handleAddPictoToFav}
                                        setIsModalVisible={setIsModalVisible} 
                                        setPopupId={setPopupId} 
                                        setConfirmPopupAction={setConfirmPopupAction} 
                                        setDeleteFavPicto={setDeleteFavPicto}
                                        isAdmin={isAdmin}>
                        </FavPictoContainer>
                        <PictoContainer favPicto={favPicto} predictPicto={predictPicto} isAddingToFav={isAddingToFav} userId={userId}
                                        selectPictoCallback={selectPictoCallback}
                                        onAddPictoToFav={onAddPictoToFav}
                                        setIsModalVisible={setIsModalVisible} setPopupId={setPopupId}>
                        </PictoContainer>
                    </View>
                </View>
            }
        </View>
    )
}

export default Home;