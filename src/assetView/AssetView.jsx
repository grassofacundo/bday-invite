import { useState } from "react";
//import styles from "./Image.module.scss";

function AssetView({ src, currentAsset, index }) {
    const [load, setLoad] = useState(false);

    const isImage = src.includes("img");

    return isImage ? (
        <>
            <img
                src={`${src}.jpg`}
                alt="Alguna imagen"
                style={{
                    display: !load && currentAsset === index ? "block" : "none",
                }}
            />
            <img
                src={`${src}-hd.jpg`}
                alt="Alguna imagen hd"
                onLoad={() => setLoad(true)}
                style={{
                    display: load && currentAsset === index ? "block" : "none",
                }}
            />
        </>
    ) : (
        <video
            controls
            muted
            loop
            style={{
                display: !load && currentAsset === index ? "block" : "none",
            }}
            poster={`${src}-poster.jpg`}
        >
            <source src={`${src}.mp4`} />
        </video>
    );
}

export default AssetView;
