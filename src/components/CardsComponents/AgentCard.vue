<template>
  <div class="agent-card">
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
          ...
        </div>
        <div
          class="my-drp-down"
          :style="{ display: shown_hidden, overflow: 'hidden' }"
        >
          <div
            @click="
              shown_hidden = 'none';
              freezAccount();
            "
            class="w-100 d-flex j-c-c a-i-c py-1 btn-style my-1 freez"
          >
            {{
              agent.user_qq.status == "active"
                ? "Freez account"
                : "Active account"
            }}
          </div>
        </div>
      </div>
      <div
        v-if="agent.profile_image != null"
        class="card-img"
        :style="{
          background: 'url(' + $store.state.server + agent.profile_image + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        v-else
        class="card-img"
        :style="{
          backgroundImage:
            'url(' +
            (agent.user_qq.gender === 'Male'
              ? require('../../assets/Images/Profile/profile.png')
              : require('../../assets/Images/Profile/Fprofile.png')) +
            ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        class="card-title"
        @click="
          $store.state.agent_id = agent.id;
          $router.push('/agent?id=' + agent.id);
        "
      >
        {{ agent.user_qq.fname + " " + agent.user_qq.lname }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "agent-card",
  data() {
    return {
      shown_hidden: "none",
    };
  },
  props: {
    agent: Object,
    is_dashboard: Boolean,
  },
  methods: {
    freezAccount() {
      if (this.agent.user_qq.status == "active") {
        axios
          .post(store.state.server + "api/freez/" + this.agent.user_qq.id)
          .then((response) => {
            if (response.status == 200) {
              location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post(
            store.state.server + "api/remove_freez/" + this.agent.user_qq.id
          )
          .then((response) => {
            if (response.status == 200) {
              location.reload();
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

<style scoped>
.card {
  height: 250px;
  width: 250px;
  padding: 20px;
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
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid rgba(121, 121, 121, 0.6);
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0 20px;
  cursor: pointer;
}

.more-options {
  height: fit-content;
  width: fit-content;
  padding: 10px;
  right: 10px;
  font: 18px 600;
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
</style>
