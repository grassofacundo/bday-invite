import React from 'react';

const InputTel = ({ formFields, formBody, setFormBody }) => {
    let isRequired = formFields.required ? formFields.required : true;
    const telProps = {
        id: formFields.id,
        placeholder: formFields.placeholder,
        maxLength: formFields.maxLength
    };

    const validInput = ({target}) => {
        setFormBody({ ...formBody, [target.id]: target.value });
    };

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <input 
                type="text" 
                id={telProps.id} 
                required={isRequired}
                placeholder={telProps.placeholder}
                maxLength={telProps.maxLength}
                onChange={target => validInput(target)}>
            </input>
        </div>
    );
}

export default InputTel;