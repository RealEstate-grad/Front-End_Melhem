<template>
  <div class="admin-requests">
    <SideBar>
      <div class="p-3">Requests({{ data.length }})</div>
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
            v-for="(item, index) in data"
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
                class="SubmitButton"
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
import store from "@/store";
import axios from "axios";
export default {
  name: "admin-requests",
  data() {
    return {
      data: [],
    };
  },
  components: {
    SideBar,
  },
  methods: {
    getData() {
      axios
        .get(store.state.server + "api/get_all_company_pending")
        .then((response) => {
          console.log(response);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ChangeAccountStatus(id) {
      axios
        .post(store.state.server + "api/remove_freez/" + id)
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
.SubmitButton {
  font-size: 15px;
  width: 100%;
}
</style>
