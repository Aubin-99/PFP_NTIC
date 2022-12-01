import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

import globalStyle from '../styles/components/global.jsx';
import styles from '../styles/screens/customPictogram.jsx';
import CustomPictogramCamera from './CustomPictogramCamera.jsx';
import CustomPictogramPicker from './CustomPictogramPicker.jsx';

function CustomChoice() {

    const [selectedTab, setSelectedTab] = useState(1);

    // <Button title="Via une URL" onPress={() => setSelectedTab(0)}/>
    // {selectedTab == 0 && <CustomPictogramURL/>}

    return (
        <View style={globalStyle.mainContainer}>

            <View style={styles.buttonsChoiceContainer}>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { setSelectedTab(1) }} disabled={selectedTab == 1}>
                    <Text style={styles.buttonText}>{"Via une nouvelle photo"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButton} onPress={() => { setSelectedTab(2) }} disabled={selectedTab == 2}>
                    <Text style={styles.buttonText}>{"Via une photo déjà existante"}</Text>
                </TouchableOpacity>
            </View>

            <View>
                {selectedTab == 1 && <CustomPictogramCamera/>}
                {selectedTab == 2 && <CustomPictogramPicker/>}
            </View>
        </View>
    )
}

export default CustomChoice;