<template>
  <div class="login-view">
    <!-- Background -->
    <BackGround></BackGround>
    <!--  -->
    <div class="container d-flex j-c-c a-i-c">
      <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
        <div class="d-block w-75">
          <h1>Welcome back</h1>
          <form @submit.prevent="Login()">
            <!-- username -->
            <div class="d-block">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                v-model="username"
                class="my-inp"
              />
            </div>
            <!--  -->
            <!-- password -->
            <div class="d-block my-3">
              <input
                :type="type"
                name="password"
                id="password"
                placeholder="Password"
                v-model="password"
                class="my-inp"
              />
              <!-- for the eye -->
              <div
                class="show-hide-container d-flex j-c-c a-i-c"
                @click="ShowHidePassword()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" :d="path" />
                </svg>
              </div>
              <!--  -->
            </div>
            <div class="d-block py-3">
              <button type="submit" class="SubmitButton">Login</button>
            </div>
          </form>
          <!--  -->
          <router-link to="/register"
            >Don't you have an account? Click here to register.</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackGround from "@/components/BackGround.vue";
import axios from "axios";
import store from "@/store";
import router from "@/router";
export default {
  name: "login-view",
  components: {
    BackGround,
  },
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      path: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5",
    };
  },
  methods: {
    ShowHidePassword() {
      if (this.type == "password") {
        this.type = "text";
        this.path =
          "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7";
      } else {
        this.type = "password";
        this.path =
          "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5";
      }
    },
    Login() {
      if (!this.username || !this.password) {
        alert("Please fill all the fields");
      } else {
        const formdata = new FormData();
        formdata.append("username", this.username);
        formdata.append("password", this.password);
        axios
          .post(store.state.server + "api/login", formdata, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            if (response.data.msg) {
              alert(response.data.msg);
            } else {
              alert(
                "welcome back " +
                  response.data.user.fname +
                  " " +
                  response.data.user.lname
              );
              window.sessionStorage.setItem("token", response.data.token);
              window.sessionStorage.setItem(
                "user_type",
                response.data.user.type
              );
              store.state.token = response.data.token;
              store.state.user_type = response.data.user.type;
              if (response.data.user.type == "admin") {
                router.push("admin-home");
              } else if (response.data.user.type == "company") {
                router.push("company-home");
              } else if (response.data.user.type == "agent") {
                router.push("agent-home");
              } else if (response.data.user.type == "user") {
                router.push("/");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
