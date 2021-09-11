import React, { useState } from 'react';

const InputText = ({ formFields, formBody, setFormBody }) => {

    const [error, setError] = useState("");

    let isRequired = formFields.required ? formFields.required : true;
    const textProps = {
        id: formFields.id,
        placeholder: formFields.placeholder,
        min: formFields.min,
        max: formFields.max
    };

    const validInput = (textProps, {target}) => {
        if (target.value.length === 0) {
            handleError(formBody, setFormBody, target, setError, "");
        } else if (!typeof target.value.match(/^[a-zA-Z\s]*$/)) {
            let message = "Debe ser sólo texto";
            handleError(formBody, setFormBody, target, setError, message);
        } else if (textProps.min && target.value.length < textProps.min) {
            let message = `La cantidad mínima de caracteres es ${textProps.min}`;
            handleError(formBody, setFormBody, target, setError, message);
        } else if (textProps.max && target.value.length > textProps.max) {
            let message = `La cantidad máxima de caracteres es ${textProps.max}`;
            handleError(formBody, setFormBody, target, setError, message);
        } else {
            setError("");
            setFormBody({ ...formBody, [target.id]: target.value });
        }
    };

    const handleError = (formBody, setFormBody, target, setError, message) => {
        const formBodyCopy = { ...formBody };
        delete formBodyCopy[target.id];
        setError(message);
        setFormBody(formBodyCopy);
    }
    
    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <input 
                type="text" 
                id={textProps.id} 
                required={isRequired}
                placeholder={textProps.placeholder}
                onChange={target => validInput(textProps, target)}>
            </input>
            {error.length > 0 && <p>{error}</p>}
        </div>
    );
}

export default InputText;