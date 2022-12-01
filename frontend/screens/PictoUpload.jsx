import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Form from '../components/Form.jsx';

import styles from '../styles/screens/confirmation.jsx';

function PictoUpload() {

    const [uploadStatus, setUploadStatus] = useState('');

    const imageHandler = (event) => {
        //const file = event.target.files[0];
        const form = new FormData(event.target.form);
        const files = form.getAll('images');

        const formData = new FormData();

        files.forEach(file => {
            formData.append('images', file);
        });

        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'multipart/form-data'
            },
            credentials: 'include',
        })
        .then(res => res.json())
        .then(res => {
            setUploadStatus(res.msg);
            console.log("Upload pictos: " + res.msg);
        })
        .catch(function(error){
            console.error("Upload pictos: " + error);
        })
    }

    return (
        <View style={styles.main_container}>
            <div className="container">
                <div className="row">
                    <form>
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input name='images' type="file" multiple/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={imageHandler}>Upload</button>
                        </div>
                        <h2>{uploadStatus}</h2>
                    </form>
                </div>
            </div>
        </View>
    )
}

export default PictoUpload;