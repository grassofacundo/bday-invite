import { useContext } from "react";
import styles from "./Information.module.scss";
import { LocalizationContext } from "../../App";
import { texts } from "../../content";

const Information = ({
    htmlText,
    title,
    text,
    map,
    hasListButton,
    hideContentAfterConfirm,
    hasInvitationFormButton,
    openList,
    openForm,
    userInfo,
}) => {
    const currentLanguage = useContext(LocalizationContext);

    function getPostMessage() {
        let extras = 0;
        try {
            extras = Number(userInfo.extras);
        } catch (e) {
            console.error(e);
        }
        return (
            <p>
                {extras > 0
                    ? texts.guestConfirmed[currentLanguage].one
                    : `${texts.guestConfirmed[currentLanguage].many} ${userInfo.name}`}
            </p>
        );
    }

    const guestHasConfirmed = () =>
        Object.values(userInfo).every((x) => x !== null && x !== undefined);

    return (
        <div className={styles.descriptionWrapper}>
            {guestHasConfirmed() && hideContentAfterConfirm ? (
                getPostMessage()
            ) : (
                <>
                    {title && (
                        <p>
                            <b>{title}</b>
                        </p>
                    )}
                    {text && <p>{text}</p>}
                    {map && (
                        <div className={styles.buttonWrapper}>
                            <button>
                                <a
                                    href={map.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {map.text}
                                </a>
                            </button>
                        </div>
                    )}
                    {hasListButton && (
                        <div className={styles.buttonWrapper}>
                            <button onClick={openList}>
                                {texts.list[currentLanguage]}
                            </button>
                        </div>
                    )}
                    {hasInvitationFormButton && (
                        <div className={styles.buttonWrapper}>
                            <button onClick={openForm}>
                                {texts.form[currentLanguage]}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Information;
