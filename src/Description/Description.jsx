import Form from "../form/Form";
import styles from "./Description.module.scss";
import { formFields } from "../fields";
import { useState } from "react";
import { FirebaseService } from "../Services/FirebaseService";

function Description({ index, userInfoProp }) {
    const [showForm, setShowForm] = useState(false);
    const [userInfo, setUserInfo] = useState(userInfoProp);

    function getDescription(index) {
        switch(index) {
            case 0: return  <p>Esta es la invitación al cumple de 30 de Facu</p>;
            case 1: return <p>Va a ser <b>el domingo 26/9</b> a las 12 del <b>mediodía</b> hasta la tarde, hay cafecito con mesa dulce y todo</p>;
            case 2: return <p>Se festeja en el club <a href="https://goo.gl/maps/iDkuUCRYv9CXPGBU7" target="_blank" rel="noreferrer">Bochas América</a> (Biedma 517, entre Rosas y Primero de Mayo)</p>;
            case 3: return <p>Comida hay mucha. <b>Si sos vegeta, avisame</b></p>;
            case 4: return <p>Bebida sólo hay <b>coca y cerveza Santa Fe</b> en lata. Si querés otra cosa, la comprás ahí, hay una cantina</p>;
            case 5: return <p>Si te invito, caete nomás, invita el Facu. Si llevás a alguien, sale <b>$500 por adulte extra</b></p>;
            case 6: return !Object.values(userInfo).every(x => x !== null && x !== undefined)
                ? <p>Para anotarte, hacé <span onClick={() => setShowForm(true)}>click acá</span>! No te cuelgues en confirmar! <b>Fecha límite para anotarse 22/9</b></p>
                : getPostMessage(userInfo);
            default: return "Venite!";
        }
    }

    function getPostMessage(userInfo) {
        let extrasAdultTemp = 0;
        let extrasKidTemp = 0;
        try {
            extrasAdultTemp = Number(userInfo.extrasAdult);
        } catch(e) {
            console.error(e);
        }
        try {
            extrasKidTemp = Number(userInfo.extrasKid);
        } catch(e) {
            console.error(e);
        }
        const money = extrasAdultTemp * 500;
        const firstPart = `Te espero ${userInfo.name}!`;
        const extras = extrasAdultTemp + extrasKidTemp;
        const secondPart = extras > 0
            ? ` a vos y a ${extras > 1 ? "tus" : "tu"}${extras > 1 ? " " + extras + " " : " "}${extras > 1 ? "extras" : "extra"}! ($${money}`
            : "";
        return <p>{firstPart + secondPart}</p>;
    }

    async function onSubmit(form) {
        const deadline = new Date('September 22, 2021');
        if (Date() >= deadline) {
            alert("Ya venció el plazo para anotarse 😭");
            return;
        }
        const insertSuccess = await FirebaseService.insertInvite(form);
        let extrasAdultTemp = 0;
        let extrasKidTemp = 0;
        try {
            extrasAdultTemp = Number(form.extrasAdult);
        } catch(e) {
            console.error(e);
        }
        try {
            extrasKidTemp = Number(form.extrasKid);
        } catch(e) {
            console.error(e);
        }
        if (!insertSuccess) {
            alert("Ups, algo falló. Tratá de completar el formulario de vuelta o contactate conmigo directamente");
        } else {
            localStorage.setItem('userName', form.name);
            localStorage.setItem('extrasAdult', extrasAdultTemp);
            localStorage.setItem('extrasKid', extrasKidTemp);
            const name = localStorage.getItem('userName');
            const extrasAdult = localStorage.getItem('extrasAdult');
            const extrasKid = localStorage.getItem('extrasKid');
            setUserInfo({name, extrasAdult, extrasKid});
            setShowForm(false)
        };
    }

    return (
        <div className={styles.descriptionWrapper}>
            <h1>Facumple 30</h1>
            {getDescription(index)}
            {showForm && <>
                <button className={styles.closeButton} onClick={() => setShowForm(false)}>X</button>
                <Form fields={formFields} onSubmit={onSubmit} />
            </>}
        </div>
    )
}

export default Description;