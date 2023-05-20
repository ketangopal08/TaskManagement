<template>
  <div>
    <h1>Manage your task</h1>
  </div>
</template>

<script>

export default {
  methods:{
    
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: 500;
  font-size: 30px;
}
</style>