import React, { useState, useEffect, useCallback } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import AuthenticationService, { setToken, getToken } from '../services/AuthenticationService.jsx';
import Form from '../components/Form.jsx';
import {validateContent, validateEmail, validatePassword } from '../validators/authenticationValidator.jsx';
import styles from '../styles/screens/authentication.jsx';

function Login({navigation}) {

    useEffect(() => {
        async function checkIfAlreadyLoggedIn() {
            const token = await getToken();
            if (token != null){
                navigation.navigate('MainApp', { screen: 'Users', isAdmin: true });
            }
        }
        checkIfAlreadyLoggedIn();
    }, []);

    const handleResult = async (result) => {
        if (result.data.auth_token) {
            successLoginCallback(result.data);
        } else if (result.status === 401) {
            throw new Error('Invalid login.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    let successLoginCallback = async function(data){
        await setToken(data.auth_token);
        navigation.navigate('MainApp', { screen: 'Users', isAdmin: true });
    }

    return (
        <View style={styles.main_container}>
            <Form
            title="Connexion"
            style={styles.form}
            action={AuthenticationService.login}
            afterSubmit={handleResult}
            buttonText="Se connecter"
            fields={{
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
                <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>{"S'inscrire"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton} onPress={() => navigation.navigate('Users')}>
                    <Text style={styles.buttonText}>{"Se connecter en tant qu'utilisateur"}</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

export default Login;