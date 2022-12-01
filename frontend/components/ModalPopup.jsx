import React, { useState, useEffect } from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';

import globalStyle from '../styles/components/global.jsx';
import modalPopupStyle from '../styles/components/modalPopup.jsx';
import clapIcon from '../images/clapping.png';
import binIcon from '../images/bin.png';
import noIcon from '../images/no.png';
import yesIcon from '../images/yes.png';
import forbidIcon from '../images/forbid.png';

function ModalPopup(props) {

    const visible = props.visible;
    const setIsModalVisible = props.setIsModalVisible;
    const id = props.id;
    const confirmAction = props.confirmAction;

    const [isPopupVisible, setIsPopupVisible] = useState(visible);

    var icon;
    var withConfirmation = false;

    useEffect(() =>{
        if (visible !== isPopupVisible) {
            setIsPopupVisible(visible)
        }
    }, [visible]);

    switch (id) {
        case "done":
            icon = clapIcon;
            break;
        case "forbidden":
            icon = forbidIcon;
            break;
        case "delete":
            withConfirmation = true;
            icon = binIcon;
            break;
        default:
            break;
    }

    if(withConfirmation) {
        return(
            <Modal
                animationType="fade"
                transparent={true}
                visible={isPopupVisible}
                onRequestClose={() => {
                    setIsPopupVisible(false);
                    setIsModalVisible(false);
                }}
            >
                <View style={modalPopupStyle.container}>
                    <Image source={icon} style={modalPopupStyle.iconImage}/>
                    <View style={modalPopupStyle.buttonsContainer}>
                        <TouchableOpacity style={[globalStyle.confirmButton, modalPopupStyle.choiceButton]} onPress={() => { confirmAction(), setIsModalVisible(false) }} >
                            <Image source={yesIcon} style={modalPopupStyle.choiceButtonImage}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[globalStyle.deleteButton, modalPopupStyle.choiceButton]} onPress={() => { setIsPopupVisible(false), setIsModalVisible(false) }}>
                            <Image source={noIcon} style={modalPopupStyle.choiceButtonImage}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    } else {
        setTimeout(() => {
            setIsPopupVisible(false);
            setIsModalVisible(false);
        }, 3000);
        return(
            <Modal
                animationType="fade"
                transparent={true}
                visible={isPopupVisible}
                onRequestClose={() => {
                    setIsPopupVisible(!isPopupVisible);
                    setIsModalVisible(false);
                }}
            >
                <View style={modalPopupStyle.container}>
                    <Image source={icon} style={modalPopupStyle.iconImage} onPress={() => setIsModalVisible(false)}/>
                </View>
            </Modal>
    )}
}

export default ModalPopup