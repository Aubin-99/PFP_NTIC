import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Picker, Button, Text, Modal, TouchableOpacity, Image, Touchable } from "react-native";
import AuthenticationService from "../services/AuthenticationService.jsx";
import UserService from "../services/UserService.jsx";
import styles from '../styles/screens/users.jsx';
import EducatorService from "../services/EducatorService.jsx";
import Form from '../components/Form.jsx';
import {validateContent } from '../validators/authenticationValidator.jsx';
import { FlatList } from "react-native-gesture-handler";
import PermissionButton from "../components/PermissionButton.jsx";
import { useIsFocused } from '@react-navigation/native';

function Users({route, navigation}){
    const [selectedValue, setSelectedValue] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [educatorId, setEducatorId] = useState('');
    const [usersOfEducator, setUsersOfEducator] = useState([]);
    const [usersLeft, setUsersLeft] = useState([]);
    const [users, setUsers] = useState([]);
    const [refreshPermissions, setRefreshPermissions] = useState(false);
    const isFocused = useIsFocused();

    const isLogged = route.params.isLogged;

    function loadUsers(){
        
        if (!isLogged) {
            UserService.getUsers().then((users) => {
                setUsers(users.data);
            });
        } else {
            AuthenticationService.getCurrent().then((response) => {
                setEducatorId(response.data.id);
                
                EducatorService.getUsersByEducator(response.data.id).then((educatorUsers) => {
                    setUsersOfEducator(educatorUsers.data);
    
                    UserService.getUsers().then((users) => {
                        setUsers(users.data);
                        setUsersLeft(users.data.filter(user => !educatorUsers.data.map(user => user.Id).includes(user.Id)));
                    }).catch((err) => {
                        console.log("Failed to get current educator: " + err);
                    });
    
                }).catch((err) => {
                    console.log("Failed to get users of current educator: " + err);
                })
            }).catch((err) => {
                console.log("Failed to get current educator: " + err);
            });
        }
    }

    useEffect(()=>{
        
        loadUsers();
        // So the useEffect gets called when we go back to the screen using the StackNavigator
        if(isFocused){ 
            getInitialData();
        }
    }, [isFocused]);

    const getInitialData = async () => {};

    useEffect(() => {
        if (usersLeft.length > 0 && isLogged){
            setSelectedValue(usersLeft[0].Id);
        }
    }, [usersLeft]);

    const addUserToEducator = () => {
        EducatorService.addUser({
            idEducator: educatorId,
            idUser: selectedValue
        }).then(loadUsers())
        .catch((err) => {
            console.log("Failed to add user: " + err);
        });
    }

    const handleResult = async (result) => {
        setModalVisible(false);
        if (result.data) {
            loadUsers();
        } else if (result.status === 401) {
            throw new Error('Invalid data.');
        } else {
            throw new Error('Something went wrong.');
        }
    }

    const handlePermissionChange = (permission, user) => {
        if (permission === 'pictogram'){
            user.CanDeleteFavPicto = !user.CanDeleteFavPicto;
            const value = user.CanDeleteFavPicto ? 1 : 0;
            UserService.updateCanDeleteFavPicto(user.Id, value);
        } else if (permission === 'sentence') { 
            user.CanDeleteFavSentence = !user.CanDeleteFavSentence;
            const value = user.CanDeleteFavSentence ? 1 : 0;
            UserService.updateCanDeleteFavSentence(user.Id, value);
        }
        setRefreshPermissions(!refreshPermissions);
    }

    const setUser = async (user) => {
        if (!isLogged) {
            try {
                await AsyncStorage.removeItem('@user_id');
                await AsyncStorage.removeItem('@can_delete_fav_picto');
                await AsyncStorage.removeItem('@can_delete_fav_sentence');
                await AsyncStorage.setItem('@user_id', JSON.stringify(user.Id));
                await AsyncStorage.setItem('@can_delete_fav_picto', JSON.stringify(user.CanDeleteFavPicto));
                await AsyncStorage.setItem('@can_delete_fav_sentence', JSON.stringify(user.CanDeleteFavSentence));
                navigation.navigate("MainApp", { screen: 'Home', isAdmin:false });
            } catch (e) {
                return null;
            }
        } else {
            try {
                await AsyncStorage.removeItem('@user_id');
                await AsyncStorage.setItem('@user_id', JSON.stringify(user.Id));
                console.log("Storing id: " + await AsyncStorage.getItem('@user_id'));
                navigation.navigate("Home");
            } catch (e) {
                return null;
            }
        }
    }

    if (!isLogged){
        return(
            <View style = {styles.container}>
                <View style = {styles.listContainer}>
                    <Text style = {styles.title}>Liste des utilisateurs</Text>
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.Id.toString()}
                        renderItem={({item})=>
                        <TouchableOpacity
                            style={styles.userButtonNotLogged}
                            key={item.Id}
                            onPress={() => setUser(item)}>
                            <Text style={styles.buttonText}>{item.FirstName} {item.Name}</Text>
                        </TouchableOpacity>
                        }
                    />                
                </View>
                <View>
                    <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('LogIn')}>
                        <Text style={styles.buttonText}>{"Se connecter en tant qu'administrateur"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>{"S'inscrire en tant qu'administrateur"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return(
            <View style = {styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <Form
                            title="Créer un nouvel utilisateur"
                            action={UserService.addUser}
                            afterSubmit={handleResult}
                            buttonText="Créer l'utilisateur"
                            fields={{
                                Name: {
                                    label: 'Nom',
                                    validators: [validateContent]
                                },
                                FirstName: {
                                    label: 'Prénom',
                                    validators: [validateContent]
                                },
                                DateOfBirth: {
                                    label: 'Date de naissance',
                                    validators: [validateContent]
                                },
                                Gender: {
                                    label: 'Sexe',
                                    validators: [validateContent]
                                }
                            }}
                        />
                        <TouchableOpacity style={styles.adminButton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Annuler</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style = {styles.listContainer}>
                    <Text style = {styles.title}>Liste des utilisateurs</Text>
                    <FlatList
                        data={usersOfEducator}
                        keyExtractor={(item) => item.Id.toString()}
                        extraData={refreshPermissions}
                        renderItem={({item})=>
                            <View style={styles.userItem}>
                                    <TouchableOpacity 
                                    style={styles.userButton}
                                    onPress={() => setUser(item)}
                                    >
                                        <Text>{item.FirstName} {item.Name}</Text>
                                    </TouchableOpacity>

                                    <PermissionButton isEnabled={item.CanDeleteFavPicto} handlePress={()=>handlePermissionChange('pictogram', item)} type={'pictogram'}/>
                                    <PermissionButton isEnabled={item.CanDeleteFavSentence} handlePress={()=>handlePermissionChange('sentence', item)} type={'sentence'}/>

                            </View>
                        }              
                    />
                </View>
                <View>
                    {usersLeft.length !== 0 &&
                    <View>
                        <Picker
                            selectedValue = {selectedValue}
                            onValueChange = {(itemValue) => {setSelectedValue(itemValue)}}
                        >
                        {usersLeft.map(user =>
                                <Picker.Item
                                    label={user.FirstName}
                                    key={user.Id}
                                    value={user.Id}
                                />
                            )
                        }
                        </Picker>
                        <TouchableOpacity style={styles.adminButton} onPress={addUserToEducator}>
                            <Text style={styles.buttonText}>{"Prendre en charge l'utilisateur"}</Text>
                        </TouchableOpacity>
                    </View>
                    }
                    <TouchableOpacity style={styles.adminButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.buttonText}>{"Créer un nouvel utilisateur"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    

}

export default Users;