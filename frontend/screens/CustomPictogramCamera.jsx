import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground, Button, Image, Text } from 'react-native';
import { Camera } from 'expo-camera';
import CameraPreview from '../components/CameraPreview.jsx';
import UploadService from '../services/UploadService.jsx';
import styles from '../styles/screens/customPictogram.jsx';
import { TextInput } from 'react-native-gesture-handler';


function CustomPictogramCamera() {

    const [isCameraOn, setIsCameraOn] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [pictogramName, setPictogramName] = useState('');
    const [pictogramImage, setPictogramImage] = useState(null);
    const camera = useRef(null);

    //On Camera

    const startCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if (status === 'granted') {
            setIsCameraOn(true);
        } else {
            console.log("Access denied.");
        }
    }

    async function takePicture() {
        if (camera) {
            let photo = await camera.current.takePictureAsync();
            setPreviewVisible(true);
            setPictogramImage(photo);
        }
        else {
            console.log('Camera Not Open');
        }
    }

    function flipCamera() {
        setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
    }

    //On Photo Preview
    
    const savePhoto = () => {
        setIsCameraOn(false);
        setPreviewVisible(false);
        //navigation.navigate('Home');
    }

    const retakePhoto = () => {
        setPictogramImage(null);
        setPreviewVisible(false);
        startCamera();
    }

    //Form

    const submit = async () => {
        const data = new FormData();
            data.append('image', {
                uri : pictogramImage.uri,
                type: 'image/jpeg',
                name: pictogramName
            });
        UploadService.upload(data)
        setPictogramImage(null);
        setPictogramName(null);
    }
  
    return (
        <View>
        {isCameraOn ? (
            <View style={styles.cameraContainer}>
                {previewVisible && pictogramImage ? (
                    <CameraPreview photo={pictogramImage} onRetake={retakePhoto} onSave={savePhoto}/>
                ) : (
                <Camera style={styles.camera} ref={camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={flipCamera}>
                            <ImageBackground style={styles.icon} source={require('../images/flipCamera.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={takePicture}>
                            <ImageBackground style={styles.icon} source={require('../images/camera.png')}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
                )}
            </View>
        ) : (
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
                    <TouchableOpacity style={styles.choiceButton} onPress={startCamera}>
                        <Text style={styles.buttonText}>{"Prendre une photo"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createButton} onPress={submit}>
                        <Text style={styles.buttonText}>{"Créer le pictogramme"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </View>
    );
}

export default CustomPictogramCamera;