<template>
  <nav>
    <div class="nav-row">
      <div class="left sides">
        <img :src="require('@/assets/LogoEstates.png')" class="logo" alt="" />
      </div>
      <div class="right sides">
        <router-link to="/favourite" v-if="$store.state.token != ''">
          <Icon icon="mdi:heart-outline" width="24" height="24" />
        </router-link>
        <router-link to="/inbox" v-if="$store.state.token != ''">
          <Icon icon="wpf:message-outline" width="24" height="24" />
        </router-link>
        <router-link to="/login" v-if="$store.state.token == ''"
          >Login
        </router-link>
        <router-link
          v-if="$store.state.token"
          :to="
            $store.state.user_type == 'admin'
              ? '/admin-home'
              : $store.state.user_type == 'company'
              ? '/company-home'
              : $store.state.user_type == 'agent'
              ? '/agent-home'
              : '/user-home'
          "
        >
          <Icon icon="gg:profile" width="24" height="24" />
        </router-link>
      </div>
    </div>
    <div class="nav-row d-flex j-c-c a-i-c">
      <router-link to="/">Home</router-link> |
      <router-link to="/real-estates">Real Estates</router-link> |
      <router-link to="/companies">Companies</router-link> |
      <router-link to="/agents">Agents</router-link>
    </div>
  </nav>
  <router-view />
  <footer>
    <div class="d-grid grid-4">
      <div class="footer-logo footer-section">
        <img :src="require('@/assets/LogoEstates.png')" alt="" />
      </div>
      <div class="footer-section">
        <div class="footer-title">
          Socialmedia
          <div class="section-line"></div>
        </div>
        <div class="footer-content">
          <a
            class="social-media"
            v-for="(item, index) in social_media"
            :key="index"
            :href="item.link"
          >
            <div class="social-media-icon">
              <Icon :icon="item.icon" width="24" height="24"></Icon>
            </div>
            <div class="social-media-text">{{ item.name }}</div>
          </a>
        </div>
      </div>
      <div class="footer-section">
        <div class="footer-title">
          Contact us
          <div class="section-line"></div>
        </div>
        <div class="footer-content">
          <a
            class="social-media"
            v-for="(item, index) in contact"
            :key="index"
            :href="item.link"
          >
            <div class="social-media-icon contact-icon">
              <Icon :icon="item.icon" width="24" height="24"></Icon>
            </div>
            <div class="social-media-text">{{ item.name }}</div>
          </a>
        </div>
      </div>
      <div class="footer-section">
        <div class="footer-title">
          Register in our website
          <div class="section-line"></div>
        </div>
        <div class="footer-content">
          <button class="footer-btn" @click="$router.push('/register')">
            Make account
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import store from "@/store";
import { Icon } from "@iconify/vue";

export default {
  name: "app",
  data() {
    return {
      social_media: [
        {
          name: "FaceBook",
          link: "https://facebook.com",
          icon: "logos:facebook",
        },
        {
          name: "X",
          link: "https://x.com",
          icon: "devicon:twitter",
        },
        {
          name: "Instagram",
          link: "https://instagram.com",
          icon: "skill-icons:instagram",
        },
      ],
      contact: [
        {
          name: "Location",
          link: "",
          icon: "mdi:location",
        },
        {
          name: "Phone",
          link: "tel:+963933097404",
          icon: "ic:baseline-phone",
        },
        {
          name: "Email",
          link: "mailto:someone@example.com",
          icon: "ic:baseline-email",
        },
      ],
    };
  },
  components: {
    Icon,
  },
  mounted() {
    if (window.sessionStorage.getItem("token")) {
      store.state.token = window.sessionStorage.getItem("token");
      store.state.user_type = window.sessionStorage.getItem("user_type");
    }
  },
  watch: {
    $route(to, from) {
      if ("id" in from.query) {
        store.state.id = to.query.id;
      }
      if ("id" in to.query) {
        store.state.id = to.query.id;
      }
      if (from.href == "/admin-add-city") {
        this.getCitys();
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: whitesmoke;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px 0;
  width: 100%;
  z-index: 10;
  background-color: rgb(3, 3, 18);
  .sides {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }
  .left {
    justify-content: start;
  }
  .right {
    justify-content: end;
  }
  .logo {
    height: 60px;
    width: fit-content;
  }

  .nav-row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    font-weight: bold;
    color: whitesmoke;
    padding: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: orange;
    }
  }
}

footer {
  background-color: #030312;
  color: white;
  padding: 40px;
}

.footer-logo > img {
  height: 150px;
  width: fit-content;
}

.footer-section {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
}

.footer-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
}

.section-line {
  width: 100%;
  height: 2px;
  background-color: orange;
  margin: 0 0 30px 0;
}

.social-media {
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: start;
  align-self: center;
  font-size: 20px;
  padding: 5px 0;
  transition: 0.5s ease-in-out;
}

.social-media:visited {
  color: white;
}

.social-media:active {
  color: white;
}

.social-media-text {
  margin: 0 0 0 10px;
}

.contact-icon {
  color: #0c253e;
}

.social-media-icon {
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  width: 19px;
  padding: 5px;
  border-radius: 50%;
  filter: grayscale(100%);
  transition: 0.5s ease-in-out;
}

.social-media:hover .social-media-icon {
  filter: grayscale(0%);
}

.social-media:hover {
  margin-left: 20px;
}

.footer-btn {
  background-color: whitesmoke;
  color: #0c253e;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.footer-btn:hover {
  margin-left: 20px;
  animation: footerBtnAnimate 0.3s 2;
}

@keyframes footerBtnAnimate {
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(15deg);
  }
  50% {
    transform: rotateZ(-15deg);
  }
  75% {
    transform: rotateZ(-15deg);
  }
  100% {
    transform: rotateZ(0);
  }
}
</style>
