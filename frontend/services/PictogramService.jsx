const axios = require("axios");
import devURL from "../utils/developmentURL";

const PICTOGRAM_BASE_URL = `${devURL}/pictograms`;

class PictogramService {
    getPictograms(){
        return axios.get(PICTOGRAM_BASE_URL);
    }

    addCustomPictogram(data){
        return axios.post(PICTOGRAM_BASE_URL, data);
    }

    addCustomPictogramImage(data){
        return axios.post(PICTOGRAM_BASE_URL + "/photo", data);
    }

    getPictoByCategory(idCategory){
        return axios.get(PICTOGRAM_BASE_URL + "/category/" + idCategory);
    }
}

export default new PictogramService();