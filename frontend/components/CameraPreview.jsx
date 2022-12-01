import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles/components/cameraPreview.jsx';

const CameraPreview = ({ photo, onRetake, onSave  }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={styles.image}
            >
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onRetake}>
                    <ImageBackground style={styles.image} source={require('../images/cancel.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onSave}>
                    <ImageBackground style={styles.image} source={require('../images/validate.png')}/>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

export default CameraPreview;