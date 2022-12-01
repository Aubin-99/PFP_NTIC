const axios = require("axios");
import devURL from "../utils/developmentURL";

const CATEGORY_BASE_URL = `${devURL}/category`;

class CategoryService {

    getCategories(){
        return axios.get(CATEGORY_BASE_URL);
    }

}

export default new CategoryService();