import { useContext } from "react";
import { formFields } from "../../content";
import Form from "../../form/Form";
import styles from "../Description.module.scss";
import { LocalizationContext } from "../../App";

const FormC = ({ onClose, onSubmit, userInfo }) => {
    const currentLanguage = useContext(LocalizationContext);

    return (
        <>
            <button className={styles.closeButton} onClick={() => onClose()}>
                X
            </button>
            <Form
                fields={formFields[currentLanguage]}
                onSubmit={onSubmit}
                hideMainForm={!!userInfo.name}
            />
        </>
    );
};

export default FormC;
