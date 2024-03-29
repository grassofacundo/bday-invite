import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    getDocs,
    collection,
} from "firebase/firestore";

export class FirebaseService {
    static init() {
        initializeApp({
            apiKey: "AIzaSyAUhB3cU9EcrggnSMRNuC56UCID0j7sAKc",
            authDomain: "normapp3test.firebaseapp.com",
            databaseURL: "https://normapp3test.firebaseio.com",
            projectId: "normapp3test",
            storageBucket: "normapp3test.appspot.com",
            messagingSenderId: "515030636361",
            appId: "1:515030636361:web:a09ed5e709bf53c3",
        });
    }

    static async insertInvite(form) {
        const db = getFirestore();

        try {
            await setDoc(
                doc(db, "invitedUsers", `${form.name}-${form.lastName}`),
                {
                    firstName: form.name,
                    last: form.lastName,
                    isVegano: form.vegeta === "vegetaYes",
                    isVegetariano: form.vegeta === "vegetarYes",
                    extras: form.extras,
                }
            );
            return true;
        } catch (e) {
            console.error("Error adding document: ", e);
            return false;
        }
    }

    static async getInvitedUsers() {
        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "invitedUsers"));
        return querySnapshot;
    }
}
