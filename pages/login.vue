<template>
  <div style="position:relative;">
    <section v-if="view == 'landing'">
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
        <v-btn @click="view = 'register'">
          Register
        </v-btn>
        <v-btn class="ml-2 black--text" color="primary" @click="view = 'login'">
          Sign in
        </v-btn>
      </div>
    </section>
    </section>
    <!-- login -----  -->
    <section v-if="view == 'login'" style="height:100vh;display:flex;align-items:center;
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
          <v-btn :loading="loading" block color="primary" @click="signIn" class="black--text">Sign in</v-btn>
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
    <!-- Register ---- -->
    <section v-if="view == 'register'" style="height:100vh;display:flex;align-items:center;
  justify-content: center;">
      <section style="width:100%">
        <div class="b2-hello">
          <div style="text-align:center">
            <h1>Sign Up Now!</h1>
            <p>WooHoo let's get start to </br>create some tasks!</p>
          </div>
        </div>
        <div class="b3-hello">
          <v-text-field
            label="Display Name"
            solo
            class="mb-0 pb-0"
            v-model="displayName"
          ></v-text-field>
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
          <v-text-field
            label="Confirm Password"
            solo
            v-model="confirmPassword"
            style="margin-top:-10px"
          ></v-text-field>
          <div style="text-align:right">
            <p style="margin-top:-10px;display: inherit;color:#999;font-size:13px">Recovery Password</p>
          </div>
          <v-btn block color="primary" :loading="loading" @click="signUp" class="black--text">Sign Up</v-btn>
        </div>
        <div class="b4-hello">
          <p @click="view = 'register'" style="margin-top:-10px;display: inherit;color:#999;font-size:13px">Sign in now</p>
        </div>
        <img src="/logo1.png" style="
          position: absolute;
          bottom: 0px;
          height: 100px;
          left:20px;
          transform: rotate(0deg);">
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
      view:'landing',
      email:'',
      password:'',
      displayName:'',
      confirmPassword:'',
      loading:false
    }
  },
  methods:{
    async signUpGoogle(){
      GoogleAuth.signUp();
    },
    async signIn(){
      try {
        this.loading = true;
        let firebaseSignIn = new FirebaseAuthentication();
        await firebaseSignIn.signIn(this.email,this.password);
        this.$router.push("/");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        alert(error)
      }
    },
    async signUp(){
      if(this.password == this.confirmPassword){
        let firebaseSignUp = new FirebaseAuthentication();
        let user = await firebaseSignUp.signUp(this.email,this.password,this.displayName);
        if(user){
          try {
            await firebaseSignUp.updateProfile(user,this.displayName);
            this.$router.push("/")
          } catch (error) {
            alert(error);
          }
        }
      }
      else{
        alert('not matching');
      }
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