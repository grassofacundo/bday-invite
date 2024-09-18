import { useState, useContext } from "react";
import { FirebaseService } from "../Services/FirebaseService";
import { config, texts } from "../content";
import List from "./List/List";
import FormC from "./FormC/FormC";
import Information from "./Information/Information";
import { LocalizationContext } from "../App";
import WhoAreYouScreen from "../WhoAreYouScreen/WhoAreYouScreen";

function Description({ index }) {
    const currentLanguage = useContext(LocalizationContext);

    const [showForm, setShowForm] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showWhoAreYouScreen, setShowWhoAreYouScreen] = useState(false);
    const [userInfo, setUserInfo] = useState(getUserInfo());
    const [dbUserInfo, setDbUserInfo] = useState();

    const content = config[currentLanguage][index];

    function getUserInfo() {
        const name = localStorage.getItem("userName");
        const extras = localStorage.getItem("extras");
        return { name, extras };
    }

    async function onSubmit(form) {
        const deadline = new Date("September 25, 2024");
        if (Date() >= deadline) {
            alert(texts.deadline[currentLanguage]);
            window.location.reload();
        }
        if (!form.name && form.extras?.length === 0) {
            return;
        }

        if (!form.name) {
            form.name = dbUserInfo.firstName;
            form.lastName = dbUserInfo.last;
            form.vegeta = dbUserInfo.isVegano ? "vegetaYes" : "vegetaNo";
            form.vegetar = dbUserInfo.isVegetariano
                ? "vegetarYes"
                : "vegetarNo";
            form.extras = [...form.extras, ...dbUserInfo.extras];
        }

        const insertSuccess = await FirebaseService.insertInvite(form);

        if (!insertSuccess) {
            alert(texts.formError[currentLanguage]);
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

    function handleSetDbUserInfo(userData) {
        setDbUserInfo(userData);
        setShowWhoAreYouScreen(false);
        setShowForm(true);
    }

    async function handleOpenForm() {
        if (!userInfo.name) {
            setShowForm(true);
        } else {
            setShowWhoAreYouScreen(true);
        }
    }

    return (
        <>
            <Information
                {...content}
                openList={() => setShowList(true)}
                openForm={() => handleOpenForm()}
                userInfo={userInfo}
            />
            {showForm && (
                <FormC
                    onClose={closeForms}
                    onSubmit={onSubmit}
                    userInfo={userInfo}
                />
            )}
            {showWhoAreYouScreen && (
                <WhoAreYouScreen
                    userInfo={userInfo}
                    closeScreen={() => setShowWhoAreYouScreen(false)}
                    handleSetDbUserInfo={handleSetDbUserInfo}
                />
            )}
            {showList && <List closeForms={closeForms} />}
        </>
    );
}

export default Description;
