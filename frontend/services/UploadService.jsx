import devURL from "../utils/developmentURL";

const UPLOAD_BASE_URL = `${devURL}/upload`;

class UploadService {

    upload(data) {
        fetch(UPLOAD_BASE_URL + '/single', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: data,
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => {
            console.log("Upload pictos: " + res.msg);
        })
        .catch(function(error){
            console.error("Upload pictos: " + error);
        });
    }

}

export default new UploadService();