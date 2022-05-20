import { useEffect, useRef, useState } from "react";
import Admin from "./Admin/Admin";
import styles from "./App.module.scss";
import Description from "./Description/Description";
import Image from "./Image/Image";

const photos = [
    `${process.env.PUBLIC_URL}/assets/img1`,
    `${process.env.PUBLIC_URL}/assets/img2`,
    `${process.env.PUBLIC_URL}/assets/img3`,
    `${process.env.PUBLIC_URL}/assets/img4`,
    `${process.env.PUBLIC_URL}/assets/img5`,
    `${process.env.PUBLIC_URL}/assets/img6`,
    `${process.env.PUBLIC_URL}/assets/img7`,
];

const touchduration = 3000; //length of time we want the user to touch before we do something

function App() {
    const [currentPic, setCurrentPic] = useState(0);
    const [adminOpen, setAdminOpen] = useState(false);
    const keysPressed = useRef({ ctr: false, d: false });
    const timer = useRef(0);

    function changePic(direction) {
        const isNext = direction > 0;
        setCurrentPic(
            isNext
                ? currentPic + 1 > photos.length - 1
                    ? 0
                    : currentPic + 1
                : currentPic - 1 < 0
                ? photos.length - 1
                : currentPic - 1
        );
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
            console.log("touch start");
            if (!timer.current) {
                console.log("setting timer");
                timer.current = setTimeout(() => {
                    console.log("Opening admin");
                    timer.current = null;
                    setAdminOpen(true);
                }, touchduration);
            }
        }

        function touchend() {
            console.log("touch end");
            //stops short touches from firing the event
            if (timer.current) {
                console.log("Removing timer");
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
        <div className={styles.mainWrapper}>
            {!adminOpen && (
                <>
                    <Description
                        index={currentPic}
                        userInfoProp={{ name, extras }}
                    />
                    <div className={styles.imageCarousel}>
                        {photos.map((photo, i) => (
                            <Image
                                key={i}
                                src={photo}
                                currentPic={currentPic}
                                index={i}
                            />
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => changePic(-1)}>Anterior</button>
                        <button onClick={() => changePic(+1)}>Siguiente</button>
                    </div>
                </>
            )}
            {adminOpen && <Admin closeAdmin={() => setAdminOpen(false)} />}
        </div>
    );
}

export default App;
