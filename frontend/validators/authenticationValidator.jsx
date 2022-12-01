export const validateContent = (text) => {
    if (!text) {
        return "Ce champ est obligatoire.";
    }
}

export const validateEmail = (text) => {
    if (text && text.search('[a-zA-Z0-9]*[^@]@{1}[a-zA-Z0-9]*[.][a-zA-Z]+') === -1) {
        return "Cette adresse email n'est pas valide.";
    }
}

export const validatePassword = (text) => {
    let error = '';

    if (text && text.search('[a-z]') === -1) {
        error += 'Au moins 1 minuscule est requis.\n'
    }

    if (text && text.search('[A-Z]') === -1) {
        error += 'Au moins 1 majuscule est requis.\n'
    }

    if (text && text.search('[0-9]') === -1) {
        error += 'Au moins 1 chiffre est requis.\n'
    }

    if (text && text.length < 8) {
        error += 'La longueur minimale est de 8.\n';
    }

    return error;
}

// Validate a field based on the validators it has
export const validateField = (validators, value) => {
    let error = '';
    validators.forEach(validator => {
        const validationError = validator(value);
        if (validationError) {
            error = validationError;
        }
    });
    return error;
};

// Validate all the fields of the form by calling validateField() on every field
export const validateFields = (fields, values) => {
    const errors = {};
    const fieldKeys = Object.keys(fields);
    fieldKeys.forEach(key => {
        const field = fields[key];
        const validators = field.validators;
        const value = values[key];
        if (validators && validators.length > 0) {
            const error = validateField(validators,  value);

            if (error) {
                errors[key] = error;
            }
        }
    });
    return errors;
};

// Check if an error has been found for any form fields
export const hasValidationError = (errors) => {
    return Object.values(errors).find((error) => error.length > 0);
}