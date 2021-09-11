import React from 'react';

const InputPassword = ({ formFields, formBody, setFormBody }) => {
    let isRequired = formFields.required ? formFields.required : true;
    const passwordProps = {
        id: formFields.id,
    };

    const validInput = ({target}) => {
        setFormBody({ ...formBody, [target.id]: target.value });
    };

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <input 
                type="password" 
                id={passwordProps.id}
                required={isRequired}
                onChange={target => validInput(target)}
            />
        </div>
    );
}

export default InputPassword;