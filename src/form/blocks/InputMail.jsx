import React from 'react';

const InputMail = ({ formFields, formBody, setFormBody }) => {
    let isRequired = formFields.required ? formFields.required : true;
    const mailProps = {
        id: formFields.id,
        placeholder: formFields.placeholder,
    };

    const validInput = ({target}) => {
        setFormBody({ ...formBody, [target.id]: target.value });
    };

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <input 
                type="text" 
                id={mailProps.id} 
                required={isRequired}
                placeholder={mailProps.placeholder}
                onChange={target => validInput(target)}
            />
        </div>
    );
}

export default InputMail;