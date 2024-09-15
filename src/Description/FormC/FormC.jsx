import { formFields } from "../../content";
import Form from "../../form/Form";
import styles from "../Description.module.scss";

const FormC = ({ onClose, onSubmit }) => {
    return (
        <>
            <button className={styles.closeButton} onClick={() => onClose()}>
                X
            </button>
            <Form fields={formFields} onSubmit={() => onSubmit()} />
        </>
    );
};

export default FormC;
