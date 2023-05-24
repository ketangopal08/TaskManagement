<template>
  <vue-bottom-sheet ref="myBottomSheet" @closed="close">
    <div style="height: 60vh">sa</div>
  </vue-bottom-sheet>
</template>

<script lang="ts">
import Vue from "vue";
//@ts-ignore
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  computed: {
    bottomSheet(): boolean {
      return this.$store.state.bottomSheet;
    },
  },
  watch: {
    bottomSheet(newVal: boolean) {
      if (newVal) {
        //@ts-ignore
        this.$refs.myBottomSheet.open();
      } else {
        //@ts-ignore
        this.$refs.myBottomSheet.close();
      }
    },
  },
  components: {
    VueBottomSheet,
  },
  methods: {
    open() {},
    close() {
      this.$store.commit("openBottomSheet", false);
    },
  },
});
</script>

<style></style>
