<template>
  <div class="company-agents">
    <SideBar>
      <div class="search-bar">
        <div class="number-add">
          <div class="number sides">Agents({{ data.length }})</div>
          <div class="add sides">
            <button
              type="button"
              class="SubmitButton"
              @click="$router.push('/company-add-agent')"
            >
              Add
            </button>
          </div>
        </div>
        <div class="w-100 d-flex j-c-c a-i-c">
          <input
            type="text"
            class="my-inp"
            style="border: 1px solid black; margin-top: 10px"
            v-model="search_for"
            placeholder="Search by name"
            v-on:input="searchData()"
          />
        </div>
      </div>
      <div
        class="d-grid gap-3 j-c-c a-i-s my-3"
        style="grid-template-columns: 25% 25% 25%"
      >
        <AgentCard
          v-for="(item, index) in shown_data"
          :key="index"
          :agent="item"
          is_dashboard="true"
        ></AgentCard>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/CompanyDashboard/SideBar.vue";
import axios from "axios";
import store from "@/store";
import AgentCard from "@/components/CardsComponents/AgentCard.vue";
export default {
  name: "company-agents",
  data() {
    return {
      data: [],
      shown_data: [],
      search_for: "",
    };
  },
  components: {
    SideBar,
    AgentCard,
  },
  methods: {
    getData() {
      axios
        .get(store.state.server + "api/get_agents", {
          headers: {
            Authorization: `Bearer ${store.state.token}`,
          },
        })
        .then((response) => {
          this.data = response.data;
          this.searchData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchData() {
      this.shown_data = [];
      if (this.search_for == "") {
        this.shown_data = this.data;
      } else {
        this.shown_data = this.data.filter((item) => {
          const fullName = (
            item.user_qq.fname +
            "" +
            item.user_qq.lname
          ).toLowerCase();
          return fullName.search(this.search_for.toLowerCase()) != -1;
        });
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.search-bar {
  padding: 20px;
}

.number-add {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(180, 180, 180);
  border-radius: 20px;
  padding: 20px;
}

.sides {
  width: 100%;
}

.number {
  text-align: start;
}

.add {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
