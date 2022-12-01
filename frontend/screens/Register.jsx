import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthenticationService, { setToken } from '../services/AuthenticationService';
import Form from '../components/Form.jsx';
import {validateContent,  
    validateEmail, 
    validatePassword } from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/authentication.jsx';

function Register({navigation}) {
    const handleResult = async (result) => {
        if (result.data.auth_token) {
            successRegisterCallback(result.data);
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    let successRegisterCallback = async function(data){
        await setToken(data.auth_token);
        navigation.navigate('MainApp', { screen: 'Users', isAdmin: true });
    }

    return (
        <View style={styles.main_container}>
            <Form
            title="Inscription"
            style={styles.form}
            action={AuthenticationService.register}
            afterSubmit={handleResult}
            buttonText="S'inscrire"
            fields={{
                name: {
                    label: 'Nom',
                    validators: [validateContent],
                },
                firstName: {
                    label: 'Prénom',
                    validators: [validateContent],
                },
                email: {
                    label: 'Adresse Email',
                    validators: [validateContent, validateEmail],
                    inputProps: {
                    keyboardType: 'email-address',
                    },
                },
                password: {
                    label: 'Mot de passe',
                    validators: [validateContent, validatePassword],
                    inputProps: {
                    secureTextEntry: true,
                    },
                },
            }}
            />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('LogIn')}>
                    <Text style={styles.buttonText}>{"Se connecter"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('Users')}>
                    <Text style={styles.buttonText}>{"Se connecter en tant qu'utilisateur"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;