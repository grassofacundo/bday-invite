import Form from "../form/Form";
import styles from "./Description.module.scss";
import { formFields } from "../fields";
import { useState } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import GuestList from "../guestList/GuestList";

function Description({ index, userInfoProp }) {
    const [showForm, setShowForm] = useState(false);
    const [showList, setShowList] = useState(false);
    const [userInfo, setUserInfo] = useState(userInfoProp);

    function getDescription(index) {
        switch (index) {
            case 0:
                return (
                    <>
                        <p>
                            Hey mate! This is my <b>birthday invite</b>!
                        </p>
                    </>
                );
            case 1:
                return (
                    <p>
                        <b>¿When?</b> <br /> Next week at 5PM
                    </p>
                );
            case 2:
                return (
                    <p>
                        <b>¿Where?</b>
                        <br />I decided to celebrate it in a golf club: the{" "}
                        <a
                            href="https://goo.gl/maps/2TmHRoA2qWE2dgS77"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Comahue Golf Club
                        </a>{" "}
                        (<small>Argentina</small>)
                    </p>
                );
            case 3:
                return (
                    <p>
                        The space is limited though, so I only invited people
                        from{" "}
                        <span
                            onClick={() => setShowList((showList) => !showList)}
                        >
                            this list
                        </span>{" "}
                        , click on it to see if your name is in there
                    </p>
                );
            case 4:
                return !Object.values(userInfo).every(
                    (x) => x !== null && x !== undefined
                ) ? (
                    <p>
                        <b>Let me know if you are coming!</b> Please, write your
                        name and the name of any other friend or family you
                        wanna bring{" "}
                        <span onClick={() => setShowForm(true)}>
                            in this form
                        </span>
                        . They are all invited!
                    </p>
                ) : (
                    getPostMessage(userInfo)
                );
            case 5:
                return (
                    <p>
                        For educational purposes, you can press Ctrl + D or
                        touch the screen for 3 seconds to open the admin panel
                    </p>
                );
            default:
                return "Venite!";
        }
    }

    function getPostMessage(userInfo) {
        let extras = 0;
        try {
            extras = Number(userInfo.extras);
        } catch (e) {
            console.error(e);
        }
        //const money = extras * 1500;
        return (
            <p>
                {extras > 0
                    ? "See you all soon!"
                    : `See you soon ${userInfo.name}!`}
            </p>
        );
    }

    async function onSubmit(form) {
        const deadline = new Date("June 06, 2022");
        if (Date() >= deadline) {
            alert("Ya venció el plazo para anotarse 😭");
            window.location.reload();
        }
        const insertSuccess = await FirebaseService.insertInvite(form);

        if (!insertSuccess) {
            alert(
                "Ups, algo falló. Tratá de completar el formulario de vuelta o contactate conmigo directamente"
            );
            window.location.reload();
        } else {
            localStorage.setItem("userName", form.name);
            localStorage.setItem("extras", form.extras.length);

            const name = localStorage.getItem("userName");
            const extras = localStorage.getItem("extras");
            setUserInfo({ name, extras });
            setShowForm(false);
        }
    }

    return (
        <div className={styles.descriptionWrapper}>
            {getDescription(index)}
            {showForm && (
                <>
                    <button
                        className={styles.closeButton}
                        onClick={() => {
                            setShowForm(false);
                            setShowList(false);
                        }}
                    >
                        X
                    </button>
                    <Form fields={formFields} onSubmit={onSubmit} />
                </>
            )}
            {showList && (
                <>
                    <button
                        className={styles.closeButton}
                        onClick={() => {
                            setShowForm(false);
                            setShowList(false);
                        }}
                    >
                        X
                    </button>
                    <GuestList />
                </>
            )}
        </div>
    );
}

export default Description;
