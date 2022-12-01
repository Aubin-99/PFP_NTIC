import React from 'react';
import { View } from 'react-native';
import Form from '../components/Form.jsx';
import PictogramService from '../services/PictogramService.jsx';
import {validateContent} from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/customPictogram.jsx';


function CustomPictogramURL() {

    //Form

    const handleResult = async (result) => {
        if (result.data) {
            console.log("Customized pictogram successfully added")
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }
  
    return (
        <View>
            <Form
            title=""
            action={PictogramService.addCustomPictogram}
            afterSubmit={handleResult}
            buttonText="Créer le pictogramme"
            fields={{
                name: {
                    label: 'Nom du pictogramme',
                    validators: [validateContent],
                },
                url: {
                    label: "URL de l'image",
                    validators: [validateContent],
                },
            }}
            />
        </View>
    );
}

export default CustomPictogramURL;