import React, { useState, useEffect } from 'react';
import InputText from './blocks/InputText';
import InputNumber from './blocks/InputNumber';
import InputDate from './blocks/InputDate';
import InputTel from './blocks/InputTel';
import InputPassword from './blocks/InputPassword';
import InputMail from './blocks/InputMail';
import InputRadio from './blocks/InputRadio';
import styles from "./Form.module.scss";

const Form = ({ fields, onSubmit }) => {
    const [formBody, setFormBody] = useState({});
    const [submitEnabled, setSubmitEnabled] = useState(false);

    useEffect(() => {
        let inputFields = fields.filter(field => field.type !== "title");
        setSubmitEnabled(inputFields.length === Object.keys(formBody).length);
    }, [formBody, fields]);

    return (
        <form className={styles.formWrapper} onSubmit={event => {event.preventDefault(); onSubmit(formBody)}}>
            {fields.map(formFields => {
                switch (formFields.type) {
                    case "title":
                        return (<div key={formFields.title}>
                            <h2>{formFields.title}</h2>
                            <p>{formFields.text}</p>
                        </div>);
                    case "text":
                        return (
                        <InputText key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />)
                    case "number":
                        return (
                        <InputNumber key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />)
                    case "customDate":
                        return (
                        <InputDate key={formFields.id}
                            formFields={formFields}
                            dateFormat={formFields.dateFormat}
                            id={formFields.id}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />)
                    case "tel":
                        return (
                        <InputTel key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />)
                    case "password":
                        return <InputPassword key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />
                    case "mail":
                        return <InputMail key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />
                    case "radio":
                        return <InputRadio key={formFields.id}
                            formFields={formFields}
                            formBody={formBody}
                            setFormBody={setFormBody}
                        />
                
                    default:
                        return <></>;
                }
            })}
            <input type="submit" value="Submit" disabled={!submitEnabled}/>
        </form>
    )
}

export default Form;