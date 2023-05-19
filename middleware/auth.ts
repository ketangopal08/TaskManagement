import {getAuth} from "firebase/auth"

export default function({route ,redirect}:any){
    if(route.path !== '/login'){
        if(!getAuth().currentUser){
            return redirect('/login')
        }
    }
    else if(route.path === '/login'){
        if(getAuth().currentUser){
            return redirect('/')
        }
    }
}