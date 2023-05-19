export default interface iAuthentication {
    signUp<T>(email:string,password:string,displayName:string):Promise<any>;
    signIn(email:string,password:string):any;
    updateProfile(user:any,displayName:string):Promise<any>;
    forgotPassword():any;
}