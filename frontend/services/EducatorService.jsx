const axios = require("axios");
import devURL from "../utils/developmentURL";

const EDUCATOR_BASE_URL = `${devURL}/educator`;

class EducatorService {
  addUser(data) {
    return axios.post(EDUCATOR_BASE_URL + "/user", data);
  }

  getUsersByEducator(educatorId) {
    return axios.get(EDUCATOR_BASE_URL + "/" + educatorId + "/user");
  }

  deleteUser(educatorId, userId) {
    return axios.delete(
      EDUCATOR_BASE_URL + "/" + educatorId + "/user/" + userId
    );
  }
}

export default new EducatorService();
