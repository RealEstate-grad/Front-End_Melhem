<template>
  <div class="admin-citys">
    <SideBar>
      <div class="p-3">
        <button class="SubmitButton" @click="$router.push('/admin-add-city')">
          Add city
        </button>
        <div class="searchBar p-3">
          <input
            type="text"
            class="my-inp"
            v-model="search_for"
            placeholder="Search by name"
            style="border: 1px solid rgba(0, 0, 0, 0.4)"
            v-on:input="searchData()"
          />
        </div>
        <table>
          <thead>
            <tr class="table-head">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Plcaes</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in shown_data"
              :key="index"
              :class="index % 2 == 0 ? 'stripped' : 'casual'"
            >
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>
                <img
                  :src="$store.state.server + item.image"
                  :alt="item.name"
                  height="100"
                  width="200"
                />
              </td>
              <td>
                <button
                  class="SubmitButton"
                  @click="$router.push('/admin-edit-city?id=' + item.id)"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  class="SubmitButton"
                  @click="$router.push('/admin-add-places?id=' + item.id)"
                >
                  Add places
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import store from "@/store";
export default {
  name: "admin-citys",
  data() {
    return {
      data: [],
      shown_data: [],
      search_for: "",
    };
  },
  components: {
    SideBar,
  },
  methods: {
    searchData() {
      this.shown_data = [];
      if (this.search_for == "") {
        this.shown_data = this.data;
      } else {
        this.shown_data = this.data.filter((item) => {
          const CityName = item.name.toLowerCase();
          return CityName.search(this.search_for.toLowerCase()) != -1;
        });
      }
    },
    async getCiys() {
      await store.dispatch("fetchCities");
      this.data = store.state.cities;
      this.searchData();
    },
  },
  mounted() {
    this.getCiys();
  },
};
</script>
