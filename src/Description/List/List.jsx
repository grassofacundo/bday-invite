import GuestList from "../../guestList/GuestList";
import styles from "../Description.module.scss";

const List = ({ closeForms }) => {
    return (
        <>
            <button className={styles.closeButton} onClick={() => closeForms()}>
                X
            </button>
            <GuestList />
        </>
    );
};

export default List;
