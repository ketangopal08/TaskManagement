export const state = () => ({
    loggedIn:false,
    user:null,
    bottomSheet:false
})

export const mutations = {
    setUserHasLoggedIn(state:any,commit:boolean){
        state.loggedIn = commit;
    },
    setUser(state:any,commit:any){
        state.user = commit;
    },
    openBottomSheet(state:any,commit:boolean){
        state.bottomSheet = commit;
    }
}
  
export const getters = {

}
  

 
export const actions = {
}