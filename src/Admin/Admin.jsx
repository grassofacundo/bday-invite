import { useEffect, useState, useRef } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import styles from "./Admin.module.scss";

const Admin = ({ closeAdmin }) => {
    const [InvitedUsers, setInvitedUsers] = useState(null);
    const numbers = useRef({
        total: 0,
        extras: 0,
        vegans: 0,
        vegetarian: 0,
    });

    useEffect(() => {
        async function getInvitedUsers() {
            const invitedUsers = await FirebaseService.getInvitedUsers();
            const invited = [];
            invitedUsers.forEach((u) => invited.push(u.data()));
            invited.forEach((guest) => {
                numbers.current.total++;
                if (guest.isVegano) numbers.current.vegans++;
                if (guest.isVegetariano) numbers.current.vegetarian++;
                guest.extras.forEach((extra) => {
                    numbers.current.extras++;
                    if (extra.vegeta === "vegetaYes") numbers.current.vegans++;
                    if (extra.vegetar === "vegetarYes")
                        numbers.current.vegetarian++;
                });
            });
            setInvitedUsers(invited);
        }

        getInvitedUsers();
    }, []);
    return (
        <main className={styles.adminWrapper}>
            <button onClick={closeAdmin}>Close admin</button>
            {!InvitedUsers && <p>Loading...</p>}
            {InvitedUsers && InvitedUsers.length > 0 && (
                <section className={styles.numberPanel}>
                    <p>{`Total confirmed: ${
                        numbers.current.total + numbers.current.extras
                    }`}</p>
                    <p>{`Companions: ${numbers.current.extras}`}</p>
                    <p>{`Vegans: ${numbers.current.vegans}`}</p>
                    <p>{`Vegetarians: ${numbers.current.vegetarian}`}</p>
                </section>
            )}
            {InvitedUsers &&
                InvitedUsers.length > 0 &&
                Object.values(InvitedUsers).map((user, i) => (
                    <section key={i} className={styles.guestBlock}>
                        <p>{`${user.firstName} ${user.last}`}</p>
                        {user.isVegano && <p>Veganx</p>}
                        {user.isVegetariano && <p>Vegetarianx</p>}
                        {user.extras.length > 0 && (
                            <ul>
                                {user.extras.map((extra, i) => (
                                    <li key={i}>
                                        <p>{`${extra.name} ${extra.lastName}`}</p>
                                        {extra.vegeta === "vegetaYes" && (
                                            <p>Vegan</p>
                                        )}
                                        {extra.vegetar === "vegetarYes" && (
                                            <p>Vegetarian</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
        </main>
    );
};

export default Admin;
