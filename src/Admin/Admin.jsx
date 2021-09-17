import { useEffect, useState } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import styles from "./Admin.module.scss";

const Admin = ({ closeAdmin }) => {
    const [InvitedUsers, setInvitedUsers] = useState(null);

    useEffect(() => {
        async function getInvitedUsers() {
            const invitedUsers = await FirebaseService.getInvitedUsers();
            const invited = [];
            invitedUsers.forEach(u => invited.push(u.data()));
            setInvitedUsers(invited);
        }
      
        getInvitedUsers();
    }, [])
    return (
        <div className={styles.adminWrapper}>
            <button onClick={closeAdmin}>Close admin</button>
            {InvitedUsers && InvitedUsers.length > 0 && Object.values(InvitedUsers).map(user => (
                <ul>
                    <li>{user.dni}</li>
                    <li>{user.extrasAdult}</li>
                    <li>{user.extrasKid}</li>
                    <li>{user.firstName}</li>
                    <li>{user.last}</li>
                    <li>{user.isVegeta}</li>
                </ul>
            ))}
        </div>
    )
}

export default Admin;