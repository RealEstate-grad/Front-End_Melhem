<template>
  <div class="estate-details">
    <div class="d-flex j-c-c py-3 w-100" style="gap: 30px">
      <div class="left">
        <table>
          <tr>
            <th style="width: 300px">name</th>
            <td style="width: 300px">
              {{ data.name }}
            </td>
          </tr>
          <tr>
            <th style="width: 300px">location</th>
            <td style="width: 300px">
              {{ " " + city.name + ", " + place.name }}
            </td>
          </tr>
        </table>
        <div class="info" v-for="(item, index) in data" :key="index">
          <table>
            <tr v-if="hide.findIndex((h) => h === index) === -1">
              <th style="width: 300px">{{ index }}</th>
              <td style="width: 300px">{{ item }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="right">
        <div class="d-flex j-c-c a-i-c">
          <button @click="type = 'Images'">Images</button>
          <button @click="type = 'Videos'">Videos</button>
        </div>
        <div class="Images" v-if="type == 'Images'">
          <img
            :src="$store.state.server + src"
            alt=""
            style="height: fit-content; width: 500px"
          />
        </div>
        <div
          v-if="type == 'Images'"
          class="img-picker d-grid my-3"
          style="grid-template-columns: 25% 25% 25% 25%"
        >
          <img
            v-for="(item, index) in data.images"
            :key="index"
            :src="$store.state.server + item.image"
            alt=""
            style="height: fit-content; width: 100px; cursor: pointer"
            @click="src = item.image"
          />
        </div>
        <div class="Videos" v-if="type == 'Videos'">
          <video
            :src="$store.state.server + vid_src"
            controls="true"
            width="500px"
          ></video>
        </div>
        <div
          v-if="type == 'Videos'"
          class="img-picker d-grid my-3"
          style="grid-template-columns: 25% 25% 25% 25%"
        >
          <video
            v-for="(item, index) in data.videos"
            :key="index"
            :src="$store.state.server + item.video"
            alt=""
            style="height: fit-content; width: 100px; cursor: pointer"
            @click="vid_src = item.video"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";

export default {
  name: "estate-details",
  data() {
    return {
      data: [],
      src: "",
      vid_src: "",
      type: "Images",
      city: [],
      place: [],
      hide: [
        "id",
        "user_id",
        "name",
        "places_id",
        "status",
        "social_media_id",
        "views",
        "shares",
        "created_at",
        "updated_at",
        "images",
        "videos",
        "user_qq",
        "place",
        "city",
        "social_media",
      ],
    };
  },
  methods: {
    getData() {
      // Get the query string from the current URL
      const queryString = window.location.search;

      // Create a URLSearchParams object
      const urlParams = new URLSearchParams(queryString);

      // Get the value of the 'id' parameter
      const id = urlParams.get("id");

      axios
        .get(store.state.server + "api/show_estate/" + id)
        .then((response) => {
          console.log(response);
          this.data = response.data;
          this.src = this.data.images[0].image;
          this.vid_src = this.data.videos[0].video;
          this.city = this.data.city;
          this.place = this.data.place;
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
