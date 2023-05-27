<template>
  <div>
    <section class="bottom--nav">
      <div class="bottom--nav-box">
        <v-btn large icon>
          <svg
            height="19px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L0 6.27003V13.5C0 14.3284 0.671573 15 1.5 15H5.5C5.77614 15 6 14.7761 6 14.5V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V14.5C9 14.7761 9.22386 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.27003L7.8254 0.120372Z"
              fill="#fff"
            />
          </svg>
        </v-btn>
      </div>
      <div class="bottom--nav-box">
        <v-btn large icon>
          <svg
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7C3 5.89543 3.89543 5 5 5H7.72525C8.46646 5 9.10464 5.52318 9.25 6.25V6.25C9.39536 6.97682 10.0335 7.5 10.7748 7.5H19C20.1046 7.5 21 8.39543 21 9.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V7Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </v-btn>
      </div>
      <div class="bottom--nav-box">
        <v-btn light fab @click="createTask">
          <svg
            height="24px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="#000"
            />
          </svg>
        </v-btn>
      </div>
      <div class="bottom--nav-box">
        <v-btn large icon>
          <svg
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z"
              stroke="#fff"
              stroke-width="2"
            />
            <path
              d="M9 11L15 11"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15H15"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </v-btn>
      </div>
      <div class="bottom--nav-box">
        <v-btn @click="logOut" large icon>
          <svg
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5ZM7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM7.45609 16.7264C6.40184 17.1946 6 17.7858 6 18.5C6 18.7236 6.03976 18.8502 6.09728 18.942C6.15483 19.0338 6.29214 19.1893 6.66219 19.3567C7.45312 19.7145 9.01609 20 12 20C14.9839 20 16.5469 19.7145 17.3378 19.3567C17.7079 19.1893 17.8452 19.0338 17.9027 18.942C17.9602 18.8502 18 18.7236 18 18.5C18 17.7858 17.5982 17.1946 16.5439 16.7264C15.4614 16.2458 13.8722 16 12 16C10.1278 16 8.53857 16.2458 7.45609 16.7264ZM6.64442 14.8986C8.09544 14.2542 10.0062 14 12 14C13.9938 14 15.9046 14.2542 17.3556 14.8986C18.8348 15.5554 20 16.7142 20 18.5C20 18.9667 19.9148 19.4978 19.5973 20.0043C19.2798 20.5106 18.7921 20.8939 18.1622 21.1789C16.9531 21.7259 15.0161 22 12 22C8.98391 22 7.04688 21.7259 5.83781 21.1789C5.20786 20.8939 4.72017 20.5106 4.40272 20.0043C4.08524 19.4978 4 18.9667 4 18.5C4 16.7142 5.16516 15.5554 6.64442 14.8986Z"
              fill="#fff"
            />
          </svg>
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import FirebaseAuthentication from "@/BLL/authentication/firebaseAuthentication";

export default {
  methods: {
    async logOut() {
      try {
        let auth = new FirebaseAuthentication();
        await auth.logout();
        this.$router.push("/login");
      } catch (error) {
        alert(error);
      }
    },
    createTask() {
      this.$store.commit("openBottomSheet", { open: true, url: "task/createTask" });
    },
  },
};
</script>

<style scoped>
.bottom--nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 80px;
}

.bottom--nav-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
