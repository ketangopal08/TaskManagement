<template>
  <div style="position:relative;">
    <section v-if="landing">
      <section class="header-out">
      <div class="header-box">
      </div>
    </section>
    <section class="body-out">
      <div class="body-o-1">
        <div>
           <h1>Discover Your <br>Dream Tasks Here</h1>
           <p>Explore all the most existing tasks<br> based on what are you trying to do.</p>
        </div>
      </div>
      <div class="body-o-2">
        <v-btn>
          Register
        </v-btn>
        <v-btn class="ml-2 black--text" color="primary" @click="landing = false">
          Sign in
        </v-btn>
      </div>
    </section>
    </section>
    <section v-else style="height:100vh;display:flex;align-items:center;
  justify-content: center;">
      <section style="width:100%">
        <div class="b2-hello">
          <div style="text-align:center">
            <h1>Hello Again!</h1>
            <p>Cool Welcome back you've<br> been missed!</p>
          </div>
        </div>
        <div class="b3-hello">
          <v-text-field
            label="Enter Email"
            solo
            class="mb-0 pb-0"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            solo
            v-model="password"
            style="margin-top:-10px"
          ></v-text-field>
          <div style="text-align:right">
            <p style="margin-top:-10px;display: inherit;color:#999;font-size:13px">Recovery Password</p>
          </div>
          <v-btn block color="primary" @click="signIn" class="black--text">Sign in</v-btn>
        </div>
        <div class="b4-hello">
          <p style="margin-top:-10px;display: inherit;color:#999;font-size:13px">Or Continue With</p>
        </div>
        <div style="text-align:center;padding-top:10px">
          <img height="33" @click="signUpGoogle()" class="mr-5" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" srcset="">
          <img height="33" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png" alt="">
        </div>
        <img src="/logo1.png" style="
          position: absolute;
          top: 58px;
          height: 100px;
          transform: rotate(90deg);">
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FirebaseAuthentication from '@/BLL/authentication/firebaseAuthentication';
import GoogleAuth from '~/BLL/authentication/googleAuth';
export default Vue.extend({
  data(){
    return{
      landing:true,
      email:'',
      password:''
    }
  },
  methods:{
    async signUpGoogle(){
      GoogleAuth.signUp();
    },
    async signIn(){
      let firebaseSignIn = new FirebaseAuthentication();
      firebaseSignIn.signIn(this.email,this.password);
    }
  }
})
</script>

<style scoped>
.b4-hello{
  text-align: center;
  padding-top: 50px;
}
.b3-hello{
  padding: 30px;
}
.b2-hello{
}
.b2-hello h1{
  font-weight: 700;
  font-size:22px;
}
.b2-hello p{
  font-size: 16px;
  color: #bbb;
  margin-top: 16px;
  font-weight: 600;
}
.body-o-2{
  padding-top: 16%;
  text-align: center;
  height: 16vh;
  padding: 13px;
}
.body-o-1{
  text-align: center;
  font-size: 14px;
  height: 30vh;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.body-o-1 h1{
  font-size:22px;
  font-weight: 700;
}
.body-o-1 p{
  font-size: 16px;
  color: #bbb;
  margin-top: 16px;
  font-weight: 600;
}
.body-out{
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