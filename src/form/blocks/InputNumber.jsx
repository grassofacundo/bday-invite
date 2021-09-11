import React from 'react';

const InputNumber = ({ formFields, formBody, setFormBody }) => {
    let isRequired = formFields.required ? formFields.required : true;
    const numberProps = {
        id: formFields.id,
        placeholder: formFields.placeholder,
        maxLength: formFields.maxLength,
    };

    const validInput = ({target}) => {
        setFormBody({ ...formBody, [target.id]: target.value });
    };

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <input 
                type="number" 
                id={numberProps.id} 
                placeholder={numberProps.placeholder}
                required={isRequired}
                onChange={target => validInput(target)}>
            </input>
        </div>
    );
}

export default InputNumber;