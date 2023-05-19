import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut} from "firebase/auth"
import iAuthentication from "../interfaces/iAuthentication";

export default class FirebaseAuthentication implements iAuthentication {

    async signUp(email:string,password:string,displayName:string) {
        let snapShot =  await createUserWithEmailAndPassword(getAuth(),email,password);
        return snapShot.user;
    }
    async signIn(email:string,password:string) {
        let snapShot =  await signInWithEmailAndPassword(getAuth(),email,password);
        return snapShot.user;
    }
    async updateProfile(user:any,displayName:string) {
        await updateProfile(user, {
            displayName: displayName, 
            photoURL: "https://media.istockphoto.com/id/1262606024/vector/male-face-in-profile-asian-guys-head-side-view-avatar.jpg?s=612x612&w=0&k=20&c=0Nfidx3yKtGPu6A399W1YDePywcQhuRSouirzfuj_Uo="
        })
    }
    async logout(){
       await signOut(getAuth());
    }
    forgotPassword() {
        throw new Error("Method not implemented.");
    }
}