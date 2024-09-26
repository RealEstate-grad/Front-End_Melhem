<template>
  <div class="add-edit">
    <h1>{{ type + " city" }}</h1>
    <div
      class="container d-flex j-c-c a-i-c"
      style="height: max-content; overflow-y: hidden"
    >
      <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
        <div class="d-block w-75">
          <form @submit.prevent="type == 'Add' ? AddCity() : EditCity()">
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
            <!-- City images -->
            <div class="d-block">
              <h2>{{ type + " Image" }}</h2>
              <input
                type="file"
                name="image"
                id="image"
                class="my-inp"
                accept="image/*"
              />
              <img
                v-if="type == 'Edit'"
                :src="$store.state.server + image"
                :alt="name"
                height="200"
                width="350"
              />
            </div>
            <!-- button -->
            <div class="d-block">
              <button type="submit" class="SubmitButton">{{ type }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import router from "@/router";
export default {
  name: "add-edit",
  props: {
    type: String,
  },
  data() {
    return {
      name: "",
      image: "",
    };
  },
  methods: {
    AddCity() {
      const image = document.querySelector("#image");
      const imageData = image.files[0];
      if (this.name == "" || imageData == undefined) {
        alert("Please fill all the data");
        return false;
      }
      const formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("image", imageData);
      axios
        .post(store.state.server + "api/add_city", formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          if (response.statusText == "OK") {
            alert("City has been added");
            router.push("/admin-citys");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    EditCity() {
      const image = document.querySelector("#image");
      const imageData = image.files[0];
      if (this.name == "") {
        alert("Please fill all the data");
        return false;
      }
      const formdata = new FormData();
      formdata.append("name", this.name);
      if (imageData != undefined) {
        formdata.append("image", imageData);
      }
      axios
        .post(
          store.state.server + "api/update_city/" + store.state.id,
          formdata,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((response) => {
          if (response.statusText == "OK") {
            alert("City has been updated");
            router.push("/admin-citys");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      axios
        .get(store.state.server + "api/show_one_city/" + store.state.id)
        .then((response) => {
          this.name = response.data.name;
          this.image = response.data.image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.type == "Edit") {
      this.getData();
    }
  },
};
</script>
