<template>
  <div class="add-places">
    <SideBar>
      <h1>Add Places</h1>
      <div class="container" style="height: max-content; overflow-y: hidden">
        <div class="d-flex j-c-c a-i-c">
          <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
            <div class="d-block w-75">
              <form @submit.prevent="AddPlace()">
                <!-- name -->
                <div class="d-block my-3">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    v-model="name"
                    class="my-inp"
                  />
                </div>
                <!-- button -->
                <div class="d-block">
                  <button type="submit" class="SubmitButton">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="p-3">
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
                <th>Edit</th>
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
                  <button
                    class="SubmitButton"
                    @click="$router.push('/admin-edit-place?id=' + item.id)"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import axios from "axios";
import store from "@/store";
export default {
  name: "add-places",
  data() {
    return {
      data: [],
      shown_data: [],
      search_for: "",
      name: "",
    };
  },
  components: {
    SideBar,
  },
  methods: {
    AddPlace() {
      if (this.name == "") {
        alert("Please fill all the data");
        return false;
      }
      axios(store.state.server + "api/add_places", {
        method: "POST",
        data: {
          name: this.name,
          cities_id: store.state.id,
        },
      })
        .then((response) => {
          if (response.statusText == "OK") {
            location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      axios
        .get(store.state.server + "api/get_all_places/" + store.state.id)
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
          const placeName = item.name.toLowerCase();
          return placeName.search(this.search_for.toLowerCase()) != -1;
        });
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
