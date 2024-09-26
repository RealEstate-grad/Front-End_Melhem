<template>
  <div class="edit-place">
    <SideBar>
      <h1>Edit Place</h1>
      <div
        class="container d-flex j-c-c a-i-c"
        style="height: max-content; overflow-y: hidden"
      >
        <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
          <div class="d-block w-75">
            <form @submit.prevent="EditPlace()">
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
                <button type="submit" class="SubmitButton">Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import axios from "axios";
import store from "@/store";
import router from "@/router";
export default {
  name: "edit-place",
  data() {
    return {
      name: "",
    };
  },
  components: {
    SideBar,
  },
  methods: {
    EditPlace() {
      if (this.name == "") {
        alert("Please fill all the data");
        return false;
      }
      axios(store.state.server + "api/update_places/" + store.state.id, {
        method: "POST",
        data: {
          name: this.name,
        },
      })
        .then((response) => {
          if (response.statusText == "OK") {
            alert("updated successfully");
            router.back();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      axios
        .get(store.state.server + "api/show_one_places/" + store.state.id)
        .then((response) => {
          this.name = response.data.name;
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
