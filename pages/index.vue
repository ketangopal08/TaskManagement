<template>
  <div>
    <h1 @click="open" v-if="user">Hey, {{ user.displayName }}</h1>
    <swipeable-bottom-sheet v-if="show" ref="swipeableBottomSheet">
      <h1>Lorem Ipsum</h1>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </swipeable-bottom-sheet>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import iUser from "~/BLL/interfaces/iUser";
//@ts-ignore
import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";

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
  components: {
    SwipeableBottomSheet,
  },
  methods: {
    open() {
      this.show = true;
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
