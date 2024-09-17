import { useState } from "react";
//import styles from "./Image.module.scss";

function AssetView({ src, currentAsset, index }) {
    const [load, setLoad] = useState(false);

    const isImage = src.includes("img");
    const isGif = src.includes("gif");

    return isImage || isGif ? (
        <>
            <img
                src={`${src}.jpg`}
                alt="Alguna imagen"
                style={{
                    display: !load && currentAsset === index ? "block" : "none",
                }}
            />
            <img
                src={`${src}-hd.${isGif ? "gif" : "jpg"}`}
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
            playsInline
            controlsList="nofullscreen noremoteplayback"
            disablePictureInPicture
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
