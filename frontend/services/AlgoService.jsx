const axios = require("axios");
import devURL from "../utils/developmentURL";

const ALGO_BASE_URL = `${devURL}/algo`;

class AlgoService {

    predict(word){
        return axios.get(ALGO_BASE_URL + "/" + word);
    }

}

export default new AlgoService();