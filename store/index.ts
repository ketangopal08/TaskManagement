export const state = () => ({
    loggedIn:false,
    user:null
})

export const mutations = {
    setUserHasLoggedIn(state:any,commit:boolean){
        state.loggedIn = commit;
    },
    setUser(state:any,commit:any){
        state.user = commit;
    }
}
  
export const getters = {

}
  

 
export const actions = {
}