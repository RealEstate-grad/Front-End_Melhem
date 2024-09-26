<template>
  <div class="side-bar">
    <div class="side-bar">
      <div class="full-screen">
        <div class="side-bar">
          <router-link to="/company-home">
            <Icon icon="gg:profile" width="24" height="24" />
            <span class="mx-1">Profile</span>
          </router-link>
          <router-link to="/company-agents">
            <Icon icon="clarity:employee-group-solid" width="24" height="24" />
            <span class="mx-1">Agents</span>
          </router-link>
          <router-link to="/company-estates">
            <Icon icon="mdi:estate" width="24" height="24" />
            <span class="mx-1">Estates</span>
          </router-link>
          <router-link to="/company-favorite">
            <Icon icon="material-symbols:favorite" width="24" height="24" />
            <span class="mx-1">Favorite</span>
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
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import store from "@/store";
import router from "@/router";
export default {
  name: "side-bar",
  methods: {
    logout() {
      store.state.token = "";
      store.state.user_type = "";
      window.sessionStorage.clear();
      router.push("/");
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="scss">
.side-bar {
  background-color: orange;
  a {
    font-weight: bold;
    color: whitesmoke;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;

    &.router-link-exact-active {
      color: whitesmoke;
      background-color: rgb(98, 98, 98);
    }
  }
  a:hover {
    color: whitesmoke;
    background-color: rgb(98, 98, 98);
  }
}
</style>
