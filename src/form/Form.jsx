import { useState, useEffect, useContext } from "react";
import styles from "./Form.module.scss";
import FormField from "./formField/FormField";
import { LocalizationContext } from "../App";
import { texts } from "../content";

const Form = ({ fields, onSubmit }) => {
    const currentLanguage = useContext(LocalizationContext);

    const [formBody, setFormBody] = useState({});
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [extraFields, setExtraFields] = useState([]);

    function addExtra(e) {
        e.preventDefault();
        const extraFieldsClone = JSON.parse(JSON.stringify(extraFields));
        extraFieldsClone.push(JSON.parse(JSON.stringify(fields)));
        setExtraFields(extraFieldsClone);
    }

    function removeExtra(e) {
        e.preventDefault();
        const extraFieldsClone = JSON.parse(JSON.stringify(extraFields));
        extraFieldsClone.pop();
        setExtraFields(extraFieldsClone);
    }

    function updateFieldId(field, index) {
        field.id = field.id + index;
        if (field.radioElem) {
            field.radioElem.forEach((radioElem) => {
                if (!radioElem.id.includes(index)) {
                    radioElem.id = radioElem.id + index;
                    radioElem.name = radioElem.name + index;
                }
            });
        }
    }

    function formatBody(formBody) {
        formBody.extras = [];
        if (extraFields.length > 0) {
            for (let i = 0; i < extraFields.length; i++) {
                const guest = {};
                for (const field of fields) {
                    guest[field.id] = formBody[field.id + i];
                    delete formBody[field.id + i];
                }
                formBody.extras.push(guest);
            }
        }
        return formBody;
    }

    useEffect(() => {
        const inputFieldsLength = fields.filter(
            (field) => field.type !== "title"
        ).length;
        let extraFieldsLength = 0;
        extraFields.forEach((extraField) =>
            extraField.forEach(() => extraFieldsLength++)
        );
        setSubmitEnabled(
            inputFieldsLength + extraFieldsLength ===
                Object.keys(formBody).length
        );
    }, [formBody, fields, extraFields]);

    return (
        <form
            className={styles.formWrapper}
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit(formatBody(formBody));
            }}
        >
            {fields.map((formFields, i) => {
                return (
                    <FormField
                        key={i}
                        formFields={formFields}
                        formBody={formBody}
                        setFormBody={setFormBody}
                    />
                );
            })}
            <button className={styles.addGuest} onClick={(e) => addExtra(e)}>
                {texts.companion.buttonAdd[currentLanguage]}
            </button>
            {extraFields?.length > 0 && (
                <>
                    <h2>{texts.companion.title[currentLanguage]}</h2>
                    {extraFields.map((extraField, index) => {
                        return (
                            <div key={index} className={styles.extraGuestForm}>
                                {extraField.map((formFields, i) => {
                                    if (!formFields.id.includes(index))
                                        updateFieldId(formFields, index);
                                    return (
                                        <FormField
                                            key={i}
                                            formFields={formFields}
                                            formBody={formBody}
                                            setFormBody={setFormBody}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                    <button
                        className={styles.addGuest}
                        onClick={(e) => removeExtra(e)}
                    >
                        {texts.companion.buttonRemove[currentLanguage]}
                    </button>
                </>
            )}
            <input
                type="submit"
                value={texts.submit[currentLanguage]}
                disabled={!submitEnabled}
            />
        </form>
    );
};

export default Form;
