import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from '../styles/components/permissionButton.jsx';

function PermissionButton(props) {

    const isEnabled = props.isEnabled;
    const handlePress = props.handlePress;
    const type = props.type;

    return (
        <TouchableOpacity 
            style={ isEnabled ? style.enabledButton : style.disabledButton }
            onPress={handlePress}
            >
                {type === 'pictogram' ?
                <Text>Supprimer les pictos favoris</Text>
                :
                <Text>Supprimer les phrases favorites</Text>
                }

        </TouchableOpacity> 
    );
    
}

export default PermissionButton;