import { useState } from 'react';
import styles from './App.module.scss';
import Description from './Description/Description';
import Image from './Image/Image';

const photos = [
    `${process.env.PUBLIC_URL}/assets/img1`,
    `${process.env.PUBLIC_URL}/assets/img2`,
    `${process.env.PUBLIC_URL}/assets/img3`,
    `${process.env.PUBLIC_URL}/assets/img4`,
    `${process.env.PUBLIC_URL}/assets/img5`,
    `${process.env.PUBLIC_URL}/assets/img6`,
    `${process.env.PUBLIC_URL}/assets/img7`,
]

function App() {
    const [currentPic, setCurrentPic] = useState(0);

    function changePic(direction) {
        const isNext = direction > 0;
        setCurrentPic(isNext
            ? currentPic + 1 > photos.length - 1 ? 0 : currentPic + 1
            : currentPic - 1 < 0 ? photos.length - 1 : currentPic - 1
        );
    }

    const name = localStorage.getItem('userName');
    const extrasAdult = localStorage.getItem('extrasAdult');
    const extrasKid = localStorage.getItem('extrasKid');

    return (
        <div className={styles.mainWrapper}>
            <Description index={currentPic} userInfoProp={{name, extrasAdult, extrasKid}}/>
            <div className={styles.imageCarousel}>
                {photos.map((photo, i) => <Image key={i} src={photo} currentPic={currentPic} index={i}/>)}
                <div className={styles.buttonContainer}>
                    <button onClick={() => changePic(-1)}>Anterior</button>
                    <button onClick={() => changePic(+1)}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default App;
