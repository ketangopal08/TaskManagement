import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import iAuthentication from "../interfaces/iAuthentication";

export default class FirebaseAuthentication implements iAuthentication {

    async signUp(email:string,password:string) {
        let snapShot =  await createUserWithEmailAndPassword(getAuth(),email,password)

        return {};
    }
    async signIn(email:string,password:string) {
        let snapShot =  await createUserWithEmailAndPassword(getAuth(),email,password);
        console.log("cool",snapShot)
        return snapShot;
    }
    forgotPassword() {
        throw new Error("Method not implemented.");
    }
}