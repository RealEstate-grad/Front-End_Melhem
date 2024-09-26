<template>
  <div class="side-bar">
    <div class="full-screen">
      <div class="side-bar">
        <router-link to="/admin-home">
          <Icon icon="material-symbols:dashboard" width="24" height="24" />
          <span class="mx-1">Home</span>
        </router-link>
        <router-link to="/admin-users">
          <Icon icon="mdi:users" width="24" height="24" />
          <span class="mx-1">Users</span>
        </router-link>
        <router-link to="/admin-companies">
          <Icon icon="mdi:company" width="24" height="24" />
          <span class="mx-1">Companies</span>
        </router-link>
        <router-link to="/admin-citys">
          <Icon icon="fluent:city-16-filled" width="24" height="24" />
          <span class="mx-1">Citys</span>
        </router-link>
        <router-link to="/admin-estates">
          <Icon icon="fluent:real-estate-20-filled" width="24" height="24" />
          <span class="mx-1">Estates</span>
        </router-link>
        <router-link to="/" @click="logout()">
          <Icon icon="material-symbols:logout" width="24" height="24" />
          <span class="mx-1">Logout</span>
        </router-link>
      </div>
      <div class="data-bar">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import store from "@/store";
import router from "@/router";
export default {
  name: "side-bar",
  components: {
    Icon,
  },
  methods: {
    logout() {
      store.state.token = "";
      store.state.user_type = "";
      window.sessionStorage.clear();
      router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.side-bar {
  background-color: rgb(138, 138, 138);
  a {
    font-weight: bold;
    color: whitesmoke;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;

    &.router-link-exact-active {
      color: black;
      background-color: rgb(207, 207, 207);
    }
  }
  a:hover {
    color: black;
    background-color: whitesmoke;
  }
}
</style>
