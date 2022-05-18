import { useEffect, useState } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import styles from "./Admin.module.scss";

const Admin = ({ closeAdmin }) => {
    const [InvitedUsers, setInvitedUsers] = useState(null);

    useEffect(() => {
        async function getInvitedUsers() {
            const invitedUsers = await FirebaseService.getInvitedUsers();
            const invited = [];
            invitedUsers.forEach((u) => invited.push(u.data()));
            setInvitedUsers(invited);
        }

        getInvitedUsers();
    }, []);
    return (
        <div className={styles.adminWrapper}>
            <button onClick={closeAdmin}>Close admin</button>
            {!InvitedUsers && <p>Cargando...</p>}
            {InvitedUsers &&
                InvitedUsers.length > 0 &&
                Object.values(InvitedUsers).map((user) => (
                    <div className={styles.guestBlock}>
                        <h3>{`${user.firstName} ${user.last}`}</h3>
                        {user.isVegano && <p>Es veganx</p>}
                        {user.isVegetariano && <p>Es vegetarianx</p>}
                        {user.extras.length > 0 && (
                            <ul>
                                {user.extras.map((extra) => (
                                    <li>{`${extra.name} ${
                                        extra.lastName
                                    }. Veganx: ${
                                        extra.vegeta === "vegetarNo"
                                            ? "Sí"
                                            : "No"
                                    }, Vegetarianx: ${
                                        extra.vegetar === "vegetarYes"
                                            ? "Sí"
                                            : "No"
                                    }`}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Admin;
