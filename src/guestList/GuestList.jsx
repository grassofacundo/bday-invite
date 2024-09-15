import styles from "./GuestList.module.scss";
import { guests } from "../content";

const GuestList = () => (
    <ul className={styles.guestListContainer}>
        {guests.map((guest, i) => (
            <li key={i}>{`- ${guest}`}</li>
        ))}
    </ul>
);

export default GuestList;
