import React from "react";
import { guests } from "../list";
import styles from "./GuestList.module.scss";

const GuestList = () => (
    <ul className={styles.guestListContainer}>
        {guests.map((guest, i) => (
            <li key={i}>{`- ${guest} -`}</li>
        ))}
    </ul>
);

export default GuestList;
