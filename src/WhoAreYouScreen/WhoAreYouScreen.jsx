import { useEffect, useState } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import styles from "./WhoAreYouScreen.module.scss";

const WhoAreYouScreen = ({ userInfo, closeScreen, handleSetDbUserInfo }) => {
    const [invitedUsers, setInvitedUsers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const invitedUsers = await FirebaseService.getInvitedUsers();
            const invited = [];
            invitedUsers.forEach((u) => invited.push(u.data()));
            if (invited) {
                const filteredInvite = invited.filter((invite) =>
                    invite.firstName.includes(userInfo.name)
                );
                setInvitedUsers(filteredInvite);
            }
        };

        fetchData().catch(console.error);
    }, [userInfo]);

    return (
        <div className={styles.listContainer}>
            <button className={styles.closeButton} onClick={closeScreen}>
                X
            </button>
            {!invitedUsers && <p>Loading...</p>}
            {invitedUsers && (
                <div>
                    <h2>Who are you?</h2>
                    {invitedUsers &&
                        invitedUsers.map((invitedUser, i) => (
                            <button
                                key={i}
                                onClick={() => handleSetDbUserInfo(invitedUser)}
                            >{`${invitedUser.firstName} ${invitedUser.last}`}</button>
                        ))}
                </div>
            )}
        </div>
    );
};
export default WhoAreYouScreen;
