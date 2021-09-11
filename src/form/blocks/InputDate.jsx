import React, { useState } from 'react';

const InputDate = ({ formFields, formBody, setFormBody, dateFormat, id }) => {

    const [stateDate, setStateDate] = useState({});
    const [error, setError] = useState("");

    let isRequired = formFields.required ? formFields.required : true;
    const customDate = {
        dateElem: formFields.dateElem,
        title: formFields.title
    };

    const validInput = (date, { target }, dateFormat) => {
        let intValue = parseInt(target.value);

        if (target.value.length === 0) {
            handleError(formBody, setFormBody, target, setError, "", date, intValue);
        } else if (typeof intValue !== "number") {
            let message = "Deben ser sólo números";
            handleError(formBody, setFormBody, target, setError, message, date, intValue);
        } else if (date.minLength && target.value.length < parseInt(date.minLength)) {
            let message = `${date.name} debe ser de al menos ${date.minLength} caracteres`;
            handleError(formBody, setFormBody, target, setError, message, date, intValue);
        } else if (date.maxLength && target.value.length > parseInt(date.maxLength)) {
            let message = `${date.name} no puede ser más de ${date.maxLength} caracteres`;
            handleError(formBody, setFormBody, target, setError, message, date, intValue);
        } else if (target.min && intValue < parseInt(target.min)) {
            handleError(formBody, setFormBody, target, setError, `El mínimo es ${target.min}`, date, intValue);
        } else if (target.max && intValue > parseInt(target.max)) {
            handleError(formBody, setFormBody, target, setError, `El máximo es ${target.max}`, date, intValue);
        } else {
            if (Object.keys(stateDate).length === 3 || ((stateDate[date.id] === null || stateDate[date.id] === undefined) && Object.keys(stateDate).length + 1 === dateFormat.length)) {
                let copiedStateDate = JSON.parse(JSON.stringify(stateDate));
                //Adjust month value since 0 is january.
                copiedStateDate[Object.keys(copiedStateDate)[1]] = copiedStateDate[Object.keys(copiedStateDate)[1]] -1;
                copiedStateDate[date.id] = intValue;
                setStateDate({ ...stateDate, [date.id]: intValue });
                let finalDate = dateFormat.map(date => copiedStateDate[date]);

                setError("");
                console.log(finalDate.join());
                setFormBody({ ...formBody, [id]: new Date(finalDate.join()) });
            } else {
                setError("");
                setStateDate({ ...stateDate, [date.id]: intValue });
            }
        }
    };

    const handleError = (formBody, setFormBody, target, setError, message, date, intValue) => {
        const formBodyCopy = { ...formBody };
        delete formBodyCopy[target.id];
        setStateDate({ ...stateDate, [date.id]: intValue });
        setError(message);
        setFormBody(formBodyCopy);
    }

    return (
        <div>
            <label htmlFor={formFields.id}>{formFields.label}</label>
            <div>
                {customDate.dateElem.map(date => (
                    <input
                        key={date.id}
                        type="number" 
                        id={date.id} 
                        placeholder={date.placeholder}
                        min={date.min} 
                        max={date.max}
                        required={isRequired}
                        onChange={target => validInput(date, target, dateFormat)}>
                    </input>
                ))}
            </div>
            {error.length > 0 && <p>{error}</p>}
        </div>
    );
}

export default InputDate;