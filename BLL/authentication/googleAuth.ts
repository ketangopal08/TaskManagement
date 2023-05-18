import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth"

export default class GoogleAuth {
    public static async signUp(){
        const provider = new GoogleAuthProvider();
        let snapShot:any = await signInWithPopup(getAuth(), provider);
        console.log(snapShot);
    }
}