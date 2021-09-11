import React from 'react';

const InputRadio = ({ formFields, formBody, setFormBody }) => {
    let isRequired = formFields.required ? formFields.required : true;
    const radioProps = {
        radioElem: formFields.radioElem,
        title: formFields.title,
    };

    const validInput = ({target}) => {
        setFormBody({ ...formBody, [formFields.id]: target.value });
    };

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            {radioProps.title && <p>{radioProps.title}</p>}
            {radioProps.radioElem.map(elem => (
                <React.Fragment key={elem.id}>
                <label htmlFor={elem.id}>{elem.label}</label>
                <input
                    type="radio" 
                    id={elem.id} 
                    name={elem.name} 
                    value={elem.value} 
                    required={isRequired}
                    onChange={target => validInput(target)}
                />
                </React.Fragment>
            ))}
        </div>
    );
}

export default InputRadio;