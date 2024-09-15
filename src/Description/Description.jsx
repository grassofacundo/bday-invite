import { useState, useContext } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import { config } from "../content";
import List from "./List/List";
import FormC from "./FormC/FormC";
import Information from "./Information/Information";
import { LocalizationContext } from "../App";

function Description({ index, userInfoProp }) {
    const currentLanguage = useContext(LocalizationContext);

    const [showForm, setShowForm] = useState(false);
    const [showList, setShowList] = useState(false);
    const [userInfo, setUserInfo] = useState(userInfoProp);

    const content = config[currentLanguage][index];

    async function onSubmit(form) {
        const deadline = new Date("September 25, 2024");
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

    function closeForms() {
        setShowForm(false);
        setShowList(false);
    }

    return (
        <>
            <Information
                {...content}
                openList={() => setShowList(true)}
                openForm={() => setShowForm(true)}
                userInfo={userInfo}
            />
            {showForm && <FormC onClose={closeForms} onSubmit={onSubmit} />}
            {showList && <List closeForms={closeForms} />}
        </>
    );
}

export default Description;
