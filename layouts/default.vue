<template>
  <v-app dark>
    <v-main>
      <v-app-bar class="elevation-0" color="dark" v-if="loggedIn">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-avatar size="36">
          <img
            src="https://img.freepik.com/premium-psd/3d-cartoon-character-wearing-mockup-face-mask_235528-230.jpg"
            alt="John"
          />
        </v-avatar>
      </v-app-bar>
      <section style="height: calc(100vh - 156px); overflow-y: auto">
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
:root {
  --c-primary: #b5cff8;
  --for-light: #111;
}
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
.v-calendar-daily__body {
  display: none !important;
}
.v-calendar-daily__intervals-head {
  display: none;
}
.v-calendar-daily__head {
  margin-right: 0 !important;
}
.theme--dark.v-calendar-daily {
  background-color: unset !important;
  border-left: unset !important;
  border-top: unset !important;
}
.theme--dark.v-calendar-daily .v-calendar-daily_head-day {
  border-right: unset !important;
  border-bottom: unset !important;
  color: unset !important;
}
.v-calendar-daily_head-day .v-btn--fab.v-size--default {
  height: 35px !important;
  width: 35px !important;
}
.v-calendar-daily_head-day.v-present .v-btn--fab.v-size--default {
  height: 35px !important;
  width: 35px !important;
  background: var(--c-primary) !important;
  color: var(--for-light) !important;
}
</style>
