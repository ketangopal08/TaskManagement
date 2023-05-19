<template>
   <v-app dark>
    <v-main>
      <section style="height:calc(100vh - 60px)"> 
        <Nuxt />
      </section>
      <section style="height:60px">
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon="mdi-open-in-new" size="x-large"></v-btn>
        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </section>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   mounted(){
   }
})
</script>

<style>
body,.v-application{
  font-family: 'Quicksand', sans-serif !important; 
}
</style>