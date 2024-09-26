<template>
  <div class="realestate-card">
    <div class="card">
      <div class="more-options country-code-dropdown" v-if="is_dashboard">
        <div
          class="my-inp-drp d-flex j-c-c a-i-c"
          style="width: fit-content"
          @click="
            shown_hidden == 'none'
              ? (shown_hidden = 'block')
              : (shown_hidden = 'none')
          "
        >
          <span
            style="
              background-color: whitesmoke;
              padding: 5px;
              border-radius: 50%;
            "
          >
            ...
          </span>
        </div>
        <div
          class="my-drp-down"
          :style="{ display: shown_hidden, overflow: 'hidden' }"
        >
          <div
            @click="
              shown_hidden = 'none';
              DeleteEstate();
            "
            class="w-100 d-flex j-c-c a-i-c py-1 btn-style my-1 freez"
          >
            Delete
          </div>
          <div
            v-if="is_admin == 'true'"
            @click="
              shown_hidden = 'none';
              status == 'pending' ? AcceptEstate() : FreezEstate();
            "
            class="w-100 d-flex j-c-c a-i-c py-1 btn-style my-1 freez"
          >
            {{ status == "pending" ? "Accept" : "Freez" }}
          </div>
        </div>
      </div>
      <div class="status">
        {{ status }}
      </div>
      <img
        v-if="image != null"
        class="card-img"
        :src="$store.state.server + image"
      />
      <div
        v-else
        class="card-img"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/LogoEstates.png') + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        class="card-title"
        @click="
          $store.state.estate_id = id;
          $router.push('/estate?id=' + id);
        "
      >
        {{ name }}
      </div>
      <div class="d-grid grid-2" style="gap: 15px">
        <div class="left">
          <div
            class="card-content"
            @click="
              $store.state.estate_id = id;
              $router.push('/estate?id=' + id);
            "
          >
            <Icon icon="mdi:cash" />
            {{ price + "SYP" }}
          </div>
          <div
            class="card-content"
            @click="
              $store.state.estate_id = id;
              $router.push('/estate?id=' + id);
            "
          >
            <Icon icon="mdi:location" />
            {{ city + ", " + place }}
          </div>
        </div>
        <div class="right">
          <img
            :src="
              company
                ? company.profile_image != null
                  ? $store.state.server + company.profile_image
                  : require('@/assets/Images/Profile/CompanyProfile.png')
                : agent.profile_image != null
                ? $store.state.server + agent.profile_image
                : user.gender == 'Male'
                ? require('../../assets/Images/Profile/profile.png')
                : require('../../assets/Images/Profile/Fprofile.png')
            "
            @click="
              $router.push(
                company ? '/compnay?id=' + company.id : '/agent?id=' + agent.id
              )
            "
            class="right-image"
            alt=""
          />
        </div>
      </div>
      <div class="d-grid" style="grid-template-columns: 50% 50%">
        <div class="card-content">
          <Icon icon="mdi:couch" />
          Living rooms:
          {{ " " + livingroom_number }}
        </div>
        <div
          class="card-content"
          @click="
            $store.state.estate_id = id;
            $router.push('/estate?id=' + id);
          "
        >
          <Icon icon="cbi:roomsbathroom" />
          Bathrooms:
          {{ " " + bathroom_number }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { Icon } from "@iconify/vue";
import axios from "axios";
export default {
  name: "realestate-card",
  data() {
    return {
      shown_hidden: "none",
    };
  },
  components: { Icon },
  props: {
    id: String,
    image: String,
    name: String,
    city: String,
    place: String,
    price: String,
    bathroom_number: String,
    livingroom_number: String,
    is_dashboard: Boolean,
    is_admin: Boolean,
    company: Object,
    agent: Object,
    user: Object,
    status: String,
  },
  methods: {
    DeleteEstate() {
      // if (this.agent.user_qq.status == "active") {
      //   axios
      //     .post(store.state.server + "api/freez/" + this.agent.user_qq.id)
      //     .then((response) => {
      //       if (response.status == 200) {
      //         location.reload();
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // } else {
      //   axios
      //     .post(
      //       store.state.server + "api/remove_freez/" + this.agent.user_qq.id
      //     )
      //     .then((response) => {
      //       if (response.status == 200) {
      //         location.reload();
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
    },
    AcceptEstate() {
      axios
        .get(store.state.server + "api/active_estate/" + this.id)
        .then((response) => {
          if (response.status == 200) {
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FreezEstate() {
      axios
        .get(store.state.server + "api/pend_estate/" + this.id)
        .then((response) => {
          if (response.status == 200) {
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.card {
  height: fit-content;
  width: 300px;
  position: relative;
  background-color: white;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), 7px 7px 5px rgba(0, 0, 0, 0.3),
    10px 10px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
}

.card-img {
  height: 200px;
  width: fit-content;
  border-radius: 10px 10px 0 0;
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 20px 20px;
  cursor: pointer;
}

.card-content {
  text-align: start;
  font-size: 17px;
  font-weight: 500;
  margin: 0 0 0 0px;
  cursor: pointer;
  padding: 0 0 15px 20px;
  width: 100%;
}

.more-options {
  height: fit-content;
  width: fit-content;
  padding: 10px;
  right: 10px;
  font: 18px 800;
}

.btn-style {
  border-radius: 10px;
  color: whitesmoke;
  transition: 0.5s ease-in-out;
}

.freez {
  background-color: orange;
}

.freez:hover {
  background-color: rgb(224, 146, 0);
}

.right-image {
  width: 50px;
  height: fit-content;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.5);
  cursor: pointer;
}

.status {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: orange;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
}
</style>
