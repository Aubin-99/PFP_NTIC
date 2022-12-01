import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../styles/components/field.jsx';

const Field = ({ fieldName, field, value, onChangeText, error }) => {
    return (
        <View>
            <Text style={styles.field}>{field.label}</Text>
            <TextInput 
                style={styles.input_area}
                {...field.inputProps}
                value={value}
                onChangeText={text => onChangeText(fieldName, text)}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

export default Field;