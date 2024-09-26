<template>
  <div class="admin-users">
    <SideBar>
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
              <th>Full name</th>
              <th>Gender</th>
              <th>phone</th>
              <th>email</th>
              <th>Type</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in shown_data"
              :key="index"
              :class="index % 2 == 0 ? 'stripped' : 'casual'"
            >
              <th>{{ item.id }}</th>
              <td>{{ item.fname + " " + item.lname }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.countre_code_phone + item.phone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.status }}</td>
              <td>
                <button
                  class="SubmitButton"
                  @click="ChangeAccountStatus(item.id, item.status, index)"
                >
                  Change status
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
import axios from "axios";
import store from "@/store";
export default {
  name: "admin-users",
  components: {
    SideBar,
  },
  data() {
    return {
      data: [],
      shown_data: [],
      search_for: "",
    };
  },
  methods: {
    getData() {
      axios
        .get(store.state.server + "api/get_all_user")
        .then((response) => {
          this.data = response.data;
          this.searchData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ChangeAccountStatus(id, status, index) {
      if (status == "active") {
        axios
          .post(store.state.server + "api/freez/" + id)
          .then((response) => {
            this.data[index].status = "pending";
            alert(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post(store.state.server + "api/remove_freez/" + id)
          .then((response) => {
            this.data[index].status = "active";
            alert(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    searchData() {
      this.shown_data = [];
      if (this.search_for == "") {
        this.shown_data = this.data;
      } else {
        this.shown_data = this.data.filter((item) => {
          const fullName = (item.fname + "" + item.lname).toLowerCase();
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

<style scoped>
.SubmitButton {
  font-size: 15px;
  width: 100%;
}
</style>
