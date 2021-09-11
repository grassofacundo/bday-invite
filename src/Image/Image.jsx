import { useState } from "react";
//import styles from "./Image.module.scss";

function Image({ src, currentPic, index }) {
    const [load, setLoad] = useState(false);

    return (
        <>
            <img
                src={`${src}.jpg`}
                alt="Alguna imagen"
                style={{display: !load && currentPic === index ? "block" : "none"}}
            />
            <img
                src={`${src}-hd.jpg`}
                alt="Alguna imagen hd"
                onLoad={() => setLoad(true)}
                style={{display: load && currentPic === index ? "block" : "none"}}
            />
        </>
    )
}

export default Image;