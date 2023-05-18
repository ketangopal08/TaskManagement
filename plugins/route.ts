import {getAuth} from "firebase/auth"

export default ({ app }:any) => {
    // Every time the route changes (fired on initialization too)
    app.router.beforeEach((to:any, from:any,next:any) => {
      //do something to validate
      
    })
 }