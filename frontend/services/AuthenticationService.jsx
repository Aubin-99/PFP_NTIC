const axios = require("axios");
import AsyncStorage from '@react-native-async-storage/async-storage';
import devURL from "../utils/developmentURL";

const AUTHENTICATION_BASE_URL = `${devURL}/authentication`;

class AuthenticationService {

    async getCurrent(){
        return axios.get(AUTHENTICATION_BASE_URL + "/", {headers: {
            'Authorization': await getToken()
          }});
    }

    register(data){
        return axios.post(AUTHENTICATION_BASE_URL + "/register", data);
    }

    login(data){
        return axios.post(AUTHENTICATION_BASE_URL + "/login", data);
    }    
}

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@auth_token');
        //if (value !== null){
            return value;
        //}
    } catch (e) {
        return null;
    }
};

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('@auth_token', token);
    } catch (e) {
        return null;
    }
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        return null;
    }
}

export default new AuthenticationService();