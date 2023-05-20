<template>
  <v-app dark>
    <v-main>
      <section style="height:calc(100vh - 80px)">
        <Nuxt />
      </section>
      <section v-if="loggedIn" style="height:80px">
        <bottomNav></bottomNav>
      </section>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import bottomNav from '@/layouts/bottomNav.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default Vue.extend({
  data(){
    return{
      user:null as any 
    }
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.$store.commit("setUserHasLoggedIn", true);
      } else {
        this.$store.commit("setUserHasLoggedIn", false);
      }
    });
  },
  components:{
   bottomNav 
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  mounted() {
    // if(this.user)
    //   this.$store.commit("setUser",this.user);
    // else
    //   this.$store.commit("setUser",null);
  }
})
</script>

<style>
body,
.v-application {
  font-family: 'Quicksand', sans-serif !important;
}

</style>