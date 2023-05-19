<template>
  <div>
    <v-btn @click="logOut"></v-btn>
  </div>
</template>

<script>
import FirebaseAuthentication from '@/BLL/authentication/firebaseAuthentication';

export default {
  methods:{
    async logOut(){
      try {
        let auth = new FirebaseAuthentication();
        await auth.logout();
        this.$router.push("/login")
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style>

</style>