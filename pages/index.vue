<template>
  <div>
    <h1 @click="$store.commit('openBottomSheet', true)" v-if="user">
      Hey, {{ user.displayName }}
    </h1>
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
h1 {
  font-weight: 500;
  font-size: 30px;
}
</style>
