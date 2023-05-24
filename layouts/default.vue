<template>
  <v-app dark>
    <v-main>
      <section style="height: calc(100vh - 100px)">
        <Nuxt />
      </section>
      <section v-if="loggedIn" style="height: 100px">
        <bottomNav></bottomNav>
      </section>
      <bottomSheet></bottomSheet>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import bottomNav from "@/layouts/bottomNav.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import bottomSheet from "@/components/global/bottomSheet.vue";
import iUser from "~/BLL/interfaces/iUser";
export default Vue.extend({
  data() {
    return {};
  },
  watch: {},
  created() {
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let newUser: iUser = {
          displayName: user.displayName as "",
          photoURL: user.photoURL as "",
          email: user.email as "",
        };
        this.$store.commit("setUser", newUser);
        this.$store.commit("setUserHasLoggedIn", true);
      } else {
        this.$store.commit("setUserHasLoggedIn", false);
        this.$store.commit("setUser", null);
      }
    });
  },
  components: {
    bottomNav,
    bottomSheet,
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  mounted() {},
});
</script>

<style>
body {
  position: fixed;
  width: 100%;
}
body,
.v-application {
  font-family: "Quicksand", sans-serif !important;
}
.bottom-sheet__card {
  width: 100%;
  position: fixed;
  background: #252525 !important;
}
.bottom-sheet__pan {
  height: 32px !important;
}
.bottom-sheet__bar[data-v-61ac11a0] {
  width: 69px !important;
  height: 5px !important;
  border-radius: 14px;
  margin: 0 auto;
  cursor: pointer;
  background: rgb(255 255 255) !important;
}
</style>
