export default interface iAuthentication {
    signUp<T>(email:string,password:string):Promise<any>;
    signIn(email:string,password:string):any;
    forgotPassword():any;
}