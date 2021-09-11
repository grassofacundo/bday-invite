import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore"

export class FirebaseService
{
    static init() {
        initializeApp({
            apiKey: "AIzaSyAUhB3cU9EcrggnSMRNuC56UCID0j7sAKc",
            authDomain: "normapp3test.firebaseapp.com",
            databaseURL: "https://normapp3test.firebaseio.com",
            projectId: "normapp3test",
            storageBucket: "normapp3test.appspot.com",
            messagingSenderId: "515030636361",
            appId: "1:515030636361:web:a09ed5e709bf53c3"
        });
    } 

    static async insertInvite(form) {
        const db = getFirestore();

        try {
            await setDoc(doc(db, "invitedUsers", form.dni), {
              firstName: form.name,
              last: form.lastName,
              dni: form.dni,
              isVegeta: form.vegeta === "vegetaYes",
              extrasAdult: form.extrasAdult,
              extrasKid: form.extrasKid
            });
            return true;
          } catch (e) {
            console.error("Error adding document: ", e);
            return false;
          }
    }
    
}
