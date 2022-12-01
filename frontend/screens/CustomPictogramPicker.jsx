import React, { useState, useRef } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles/screens/customPictogram.jsx';
import { TextInput } from 'react-native-gesture-handler';
import UploadService from '../services/UploadService.jsx';

function CustomPictogramPicker() {

    const [pictogramName, setPictogramName] = useState('');
    const [pictogramImage, setPictogramImage] = useState(null);

    const handleDocumentSelection = async () => {
        try {
            const response = await DocumentPicker.getDocumentAsync({
                type: 'image/*'
            });
            setPictogramImage(response);
        } catch (error) {
            console.log(error);
            setPictogramImage(null);
        }
        
    }

    const submit = async () => {
        if (pictogramImage != null) {
            // If file selected then create FormData
            const data = new FormData();
            data.append('image', {
                uri : pictogramImage.uri,
                type: 'image/jpeg',
                name: pictogramName
            });
            UploadService.upload(data);
            setPictogramImage(null);
            setPictogramName(null);
        }
    }

    return (
        <View>
            <Text style={styles.field}>
                Nom du pictogramme
            </Text>
            <TextInput style={styles.input_area}
                value={pictogramName}
                onChangeText={name => setPictogramName(name)}
            />
            {pictogramImage && <Image
                source={{uri: pictogramImage && pictogramImage.uri}}
                style={styles.image}
            />}
            <View style={styles.buttonsChoiceContainer}>
                <TouchableOpacity style={styles.choiceButton} onPress={handleDocumentSelection}>
                    <Text style={styles.buttonText}>{"Importer une photo"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createButton} onPress={submit}>
                    <Text style={styles.buttonText}>{"Créer le pictogramme"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomPictogramPicker;