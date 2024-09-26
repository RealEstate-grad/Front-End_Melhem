<template>
  <div class="city-card">
    <div class="card">
      <div
        class="card-img"
        :style="{
          background: 'url(' + $store.state.server + city.image + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>
      <div class="card-title">{{ city.name }}</div>
      <div class="card-contents">
        <div class="card-conten my-3" style="font-weight: 600; font-size: 18px">
          places
        </div>
        <div class="card-content" v-for="(item, index) in places" :key="index">
          <router-link to="/real-estates" @click="filterPlace(item.id)">{{
            item.name
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
export default {
  name: "city-card",
  props: {
    city: Object,
  },
  data() {
    return {
      places: [],
    };
  },
  methods: {
    getPlaces() {
      axios
        .get(store.state.server + "api/get_all_places/" + this.city.id)
        .then((response) => {
          this.places = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterPlace(id) {
      store.state.place_id = id;
    },
  },
  mounted() {
    this.getPlaces();
  },
};
</script>

<style scoped>
.card {
  height: 350px;
  width: 300px;
  position: relative;
  background-color: white;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), 7px 7px 5px rgba(0, 0, 0, 0.3),
    10px 10px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}

.card-img {
  height: 150px;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 0;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}

.card-content {
  text-align: start;
  font-size: 15px;
  margin: 20px 0 0 20px;
}

.card-contents {
  overflow-y: scroll;
  height: 130px;
}

/* width */
.card-contents::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.card-contents::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.card-contents::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.card-contents::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
