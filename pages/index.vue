<template>
  <div class="pa-3">
    <section class="i-main-header">
      <p v-if="user">Hey, {{ user.displayName }}</p>
      <h1>Manage Your Taks</h1>
    </section>

    <section>
      <v-calendar ref="calendar" type="week"> </v-calendar>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import iUser from "~/BLL/interfaces/iUser";

export default Vue.extend({
  data() {
    return {
      show: false,
    };
  },
  computed: {
    user(): iUser {
      return this.$store.state.user;
    },
  },
});
</script>

<style scoped>
.i-main-header {
  padding: 8px;
  margin-bottom: 13px;
}
.i-main-header p {
  font-size: 18px;
  margin-bottom: 0px;
  color: #ccc;
}
.i-main-header h1 {
  font-size: 28px;
  font-weight: 600;
  margin-top: 3px;
}
</style>
