import { useCallback, useContext } from "react";
import { config } from "../content";
import styles from "./LanguagePicker.module.scss";
import { LocalizationContext } from "../App";

const LanguagePicker = ({ changeLang }) => {
    const currentLanguage = useContext(LocalizationContext);

    const languageList = useCallback(() => {
        const keys = Object.keys(config);
        return keys;
    }, []);

    return (
        <div className={styles.languageSelection}>
            {" "}
            {languageList().map((language, i) => (
                <button
                    key={i}
                    onClick={() => changeLang(language)}
                    disabled={language === currentLanguage}
                >
                    {language}
                </button>
            ))}
        </div>
    );
};

export default LanguagePicker;
