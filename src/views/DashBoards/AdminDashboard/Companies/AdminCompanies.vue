<template>
  <div class="admin-companies">
    <SideBar>
      <div class="p-3">
        <button
          class="SubmitButton"
          @click="$router.push('/admin-companies-requests')"
        >
          Check requests
        </button>
        <div class="searchBar p-3">
          <input
            type="text"
            class="my-inp"
            v-model="search_for"
            placeholder="Search by company name"
            style="border: 1px solid rgba(0, 0, 0, 0.4)"
            v-on:input="searchData()"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr class="table-head">
            <th>#</th>
            <th>Company name</th>
            <th>phone</th>
            <th>email</th>
            <th>Type</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in shown_data"
            :key="index"
            :class="index % 2 == 0 ? 'stripped' : 'casual'"
          >
            <th>{{ item.user_qq.id }}</th>
            <td>{{ item.user_qq.company_name }}</td>
            <td>{{ item.countre_code_phone + item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.status }}</td>
            <td>
              <button
                class="SubmitButton s2"
                @click="ChangeAccountStatus(item.id)"
              >
                Change status
              </button>
            </td>
            <td>
              <button
                class="SubmitButton s2"
                @click="$router.push('/company?id=' + item.user_qq.id)"
              >
                Check Profile
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import axios from "axios";
import store from "@/store";
export default {
  name: "admin-companies",
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
    getData() {
      axios
        .get(store.state.server + "api/get_all_company")
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
          const companyName = item.user_qq.company_name.toLowerCase();
          return companyName.search(this.search_for.toLowerCase()) != -1;
        });
      }
    },
    ChangeAccountStatus(id) {
      axios
        .post(store.state.server + "api/freez/" + id)
        .then((response) => {
          alert(response.data);
          location.reload();
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

<style scoped>
.s2 {
  font-size: 15px;
  width: 100%;
}
</style>
