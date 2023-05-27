<template>
  <div class="createTask">
    <section class="pa-3">
      <v-row>
        <v-col cols="4" style="">
          <v-btn color="#4c91f4" style="font-weight: 600 !important" text small
            >cancel</v-btn
          >
        </v-col>
        <v-col cols="4" style="text-align: center">
          <p class="t-title">New Task</p>
        </v-col>
        <v-col cols="4" style="text-align: right">
          <v-btn color="#4c91f4" style="font-weight: 600 !important" text small
            >done</v-btn
          >
        </v-col>
      </v-row>
    </section>
    <section class="pa-3">
      <div>
        <span class="tf-title">Title</span>
        <v-text-field placeholder="Enter task title" solo></v-text-field>
      </div>
      <div>
        <span class="tf-title">Description</span>
        <v-textarea placeholder="Enter task description" solo></v-textarea>
      </div>
      <v-row class="ma-0 pa-0">
        <v-col class="pa-0 pr-1" cols="6">
          <div>
            <span class="tf-title">Due date</span>
            <v-text-field
              prepend-inner-icon="mdi-calendar-range-outline"
              placeholder="Due date"
              solo
            ></v-text-field>
          </div>
        </v-col>
        <v-col class="pa-0 pl-1" cols="6">
          <div>
            <span class="tf-title">Estimate time</span>
            <v-text-field
              prepend-inner-icon="mdi-clock-outline"
              placeholder="00:00"
              solo
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <div>
        <span class="tf-title">Priority</span>
        <div class="prio-box">
          <div
            @click="priority = 'low'"
            class="pb"
            :class="priority == 'low' ? 'pb-active' : ''"
          >
            Low
          </div>
          <div
            @click="priority = 'medium'"
            class="pb"
            :class="priority == 'medium' ? 'pb-active' : ''"
          >
            Medium
          </div>
          <div
            @click="priority = 'high'"
            class="pb"
            :class="priority == 'high' ? 'pb-active' : ''"
          >
            High
          </div>
        </div>
      </div>
      <div>
        <span class="tf-title" style="margin-top: 28px">Assign task</span>
        <v-autocomplete
          v-model="values"
          :items="items"
          solo
          chips
          small-chips
          multiple
        ></v-autocomplete>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      priority: "low",
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
    };
  },
});
</script>

<style scoped>
.pb-active {
  background: var(--c-primary);
  color: var(--for-light);
}
.prio-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
  background: #313131;
  border-radius: 8px;
}
.pb {
  border-radius: 8px;
  text-align: center;
  padding: 8px 0;
  font-size: 15px;
  font-weight: 600;
  transition: 0.6s;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  cursor: pointer;
}
.t-title {
  font-weight: 500;
  font-size: 15px !important;
}
.tf-title {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
</style>
