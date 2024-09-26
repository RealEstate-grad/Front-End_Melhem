<template>
  <div class="admin-home">
    <SideBar>
      <div class="d-grid grid-3">
        <HomeCard
          v-for="(item, index) in data"
          :key="index"
          :icon="item.icon"
          :title="item.name"
          :body="item.count"
        ></HomeCard>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import HomeCard from "@/components/DashBoards/AdminDashboard/CardsComponents/HomeCard.vue";
import axios from "axios";
import store from "@/store";
export default {
  name: "admin-home",
  components: {
    SideBar,
    HomeCard,
  },
  data() {
    return {
      data: [
        {
          icon: "mdi:users",
          name: "Users",
          count: 0,
        },
        {
          icon: "mdi:company",
          name: "Companies",
          count: 0,
        },
        {
          icon: "material-symbols:real-estate-agent",
          name: "Agents",
          count: 0,
        },
        {
          icon: "fluent:city-16-filled",
          name: "Citys",
          count: 0,
        },
        {
          icon: "fluent:real-estate-20-filled",
          name: "Estates",
          count: 0,
        },
      ],
    };
  },
  methods: {
    getData() {
      axios
        .get(store.state.server + "api/number_estate_user_company_agent_city")
        .then((response) => {
          this.data[0].count = response.data[1];
          this.data[1].count = response.data[2];
          this.data[2].count = response.data[3];
          this.data[3].count = response.data[4];
          this.data[4].count = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
