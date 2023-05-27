<template>
  <vue-bottom-sheet ref="myBottomSheet" @closed="close">
    <div style="min-height: 90vh; overflow-y: auto">
      <component :is="component" v-if="component"></component>
    </div>
  </vue-bottom-sheet>
</template>

<script lang="ts">
import Vue from "vue";
//@ts-ignore
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

export default Vue.extend({
  data() {
    return {
      component: null as any,
    };
  },
  mounted() {},
  computed: {
    bottomSheet(): any {
      return this.$store.state.bottomSheet;
    },
  },
  watch: {
    bottomSheet(newVal: any) {
      if (!newVal) return;
      if (newVal.open) {
        this.templateUrl(newVal.url);
        //@ts-ignore
        this.$refs.myBottomSheet.open();
      } else {
        this.$store.commit("openBottomSheet", null);
      }
    },
  },
  components: {
    VueBottomSheet,
  },
  methods: {
    close() {
      this.$store.commit("openBottomSheet", null);
    },
    templateUrl: function (url: string) {
      this.component = () => import("@/components/" + url).catch((error) => {});
    },
  },
});
</script>

<style></style>
