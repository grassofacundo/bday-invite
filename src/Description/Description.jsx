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
                            ¡Vení a festejar conmigo <br /> <b>Mis 30!</b>
                        </p>
                    </>
                );
            case 1:
                return (
                    <p>
                        <b>¿Cuándo?</b> <br /> Sábado 11/6 a las 21:30 hs
                    </p>
                );
            case 2:
                return (
                    <p>
                        <b>¿Dónde?</b>
                        <br />
                        Club{" "}
                        <a
                            href="https://goo.gl/maps/iDkuUCRYv9CXPGBU7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Bochas América
                        </a>{" "}
                        - Biedma 517 <br />(
                        <small>entre Rosas y Primero de Mayo</small>)
                    </p>
                );
            case 3:
                return (
                    <p>
                        <b>¿Comida?</b> <br />
                        Mucha! más bebida para la cena, postrecito y cositas
                        dulces 😋
                    </p>
                );
            case 4:
                return (
                    <p>
                        Si te querés embriagar,
                        <br /> podés comprar más bebida en el lugar.
                    </p>
                );
            case 5:
                return (
                    <p>
                        Si estás{" "}
                        <span
                            onClick={() => setShowList((showList) => !showList)}
                        >
                            en esta lista
                        </span>{" "}
                        te invito yo 😉. Amigues, parejas y acompañantes son
                        bienvenides pagando su tarjeta (
                        <small>$1500 por adulte</small>)
                    </p>
                );
            case 6:
                return !Object.values(userInfo).every(
                    (x) => x !== null && x !== undefined
                ) ? (
                    <p>
                        Para anotarte, hacé{" "}
                        <span onClick={() => setShowForm(true)}>click acá</span>
                        <br />
                        Fecha límite para anotarse <b>lunes 6/6</b>
                    </p>
                ) : (
                    getPostMessage(userInfo)
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
            <p>{extras > 0 ? "Lxs espero!" : `Te espero ${userInfo.name}!`}</p>
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
