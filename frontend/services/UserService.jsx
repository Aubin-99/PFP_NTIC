const axios = require("axios");
import devURL from "../utils/developmentURL.jsx";

const USER_BASE_URL = `${devURL}/user`;

class UserService {

    getUsers(){
        return axios.get(USER_BASE_URL);
    }

    getUserFavPicto(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favpicto");
    }

    addFavPicto(userId, picto){
        return axios.post(USER_BASE_URL + "/" + userId + "/favpicto/add", picto);
    }

    deleteFavPicto(userId, pictoId){
        return axios.delete(USER_BASE_URL + "/" + userId + "/favpicto/" + pictoId + "/delete");
    }

    getFavSentences(userId){
        return axios.get(USER_BASE_URL + "/" + userId + "/favsentence");
    }

    addUser(data){
        return axios.post(USER_BASE_URL, data);
    }

    addFavSentence(userId, pictoArray){
        return axios.post(USER_BASE_URL + "/" + userId + "/favsentence/add", pictoArray);
    }

    deleteFavSentence(userId, sentenceId){
        return axios.delete(USER_BASE_URL + "/" + userId + "/favsentence/" + sentenceId + "/delete");
    }

    updateCanDeleteFavPicto(userId, permission){
        return axios.put(USER_BASE_URL + "/" + userId + "/pictogram/" + permission);
    }

    updateCanDeleteFavSentence(userId, permission){
        return axios.put(USER_BASE_URL + "/" + userId + "/sentence/" + permission);
    }

}

export default new UserService();