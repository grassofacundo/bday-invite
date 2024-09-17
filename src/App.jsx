import { useEffect, useRef, useState, createContext } from "react";
import Admin from "./Admin/Admin";
import styles from "./App.module.scss";
import Description from "./Description/Description";
import AssetView from "./assetView/AssetView";
import { assets, texts } from "./content";
import LanguagePicker from "./LanguagePicker/LanguagePicker";

const touchDuration = 3000; //length of time we want the user to touch before we do something
export const LocalizationContext = createContext(null);

function App() {
    const [currentAsset, setCurrentAsset] = useState(0);
    const [adminOpen, setAdminOpen] = useState(false);
    const [userLanguage, setUserLanguage] = useState(() => getSystemLanguage());
    const keysPressed = useRef({ ctr: false, d: false });
    const timer = useRef(0);

    function changePic(direction) {
        const isNext = direction > 0;
        setCurrentAsset(
            isNext
                ? currentAsset + 1 > assets.length - 1
                    ? 0
                    : currentAsset + 1
                : currentAsset - 1 < 0
                ? assets.length - 1
                : currentAsset - 1
        );
    }

    function getSystemLanguage() {
        let language = "en";

        const navLang = navigator.language;
        try {
            if (navLang) {
                const langParts = navLang.split("-");
                const languageWithoutRegion = langParts[0];
                language = languageWithoutRegion;
            }
        } catch (error) {
            language = "en";
        }
        return language;
    }

    const name = localStorage.getItem("userName");
    const extras = localStorage.getItem("extras");

    useEffect(() => {
        //Keyboard events
        document.addEventListener("keydown", (event) => {
            if (event.code === "ControlLeft") keysPressed.current.ctr = true;
            if (event.code === "KeyD") keysPressed.current.d = true;
            if (keysPressed.current.ctr && keysPressed.current.d) {
                event.preventDefault();
                setAdminOpen(true);
            } else {
                setAdminOpen(false);
            }
        });
        document.addEventListener("keyup", () => {
            keysPressed.current.ctr = false;
            keysPressed.current.d = false;
        });

        //Touch events
        function touchstart() {
            if (!timer.current) {
                timer.current = setTimeout(() => {
                    timer.current = null;
                    setAdminOpen(true);
                }, touchDuration);
            }
        }

        function touchend() {
            //stops short touches from firing the event
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        }

        window.addEventListener("touchstart", touchstart, false);
        window.addEventListener("touchmove", touchend, false);
        window.addEventListener("touchend", touchend, false);
        window.addEventListener("contextmenu", (e) => e.preventDefault());
    }, []);

    return (
        <LocalizationContext.Provider value={userLanguage}>
            <div className={styles.mainWrapper}>
                {!adminOpen && (
                    <>
                        <Description
                            index={currentAsset}
                            userInfoProp={{ name, extras }}
                        />
                        <div className={styles.imageCarousel}>
                            {/* <LanguagePicker
                                changeLang={setUserLanguage}
                            ></LanguagePicker> */}
                            {assets.map((asset, i) => (
                                <AssetView
                                    key={i}
                                    src={asset}
                                    currentAsset={currentAsset}
                                    index={i}
                                />
                            ))}
                            <div className={styles.buttonContainer}>
                                <button onClick={() => changePic(-1)}>
                                    {texts.buttonBack[userLanguage]}
                                </button>
                                <button onClick={() => changePic(+1)}>
                                    {texts.buttonForward[userLanguage]}
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {adminOpen && <Admin closeAdmin={() => setAdminOpen(false)} />}
            </div>
        </LocalizationContext.Provider>
    );
}

export default App;
