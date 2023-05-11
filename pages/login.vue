<template>
  <div>
    <section class="header-out">
      <div class="header-box">
      </div>
    </section>
    <section class="body-out">
      <div class="body-o-1">
        <h1>Discover Your <br>Dream Tasks Here</h1>
        <p>Explore all the most existing tasks<br> based on what are you trying to do.</p>
      </div>
      <div class="body-o-2">
        <v-btn>
          Register
        </v-btn>
        <v-btn class="ml-2" color="primary">
          Sign in
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.body-o-2{
  padding-top: 16%;
  text-align: center;
}
.body-o-1{
  text-align: center;
  font-size: 14px;
}
.body-o-1 h1{
  font-weight: 600;
  margin-top: 60px;
}
.body-o-1 p{
  font-size: 16px;
  color: #ccc;
  margin-top: 16px;
}
.body-out{
  padding: 13px;
  height: 46vh;
}


.header-out{
  padding: 13px;
  height: 54vh;
}
.header-box{
  width: 100%;
  overflow: hidden;
  background: url("/back1.png");
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  height: 100%;
}
</style>