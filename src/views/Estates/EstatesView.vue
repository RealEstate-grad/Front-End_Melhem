<template>
  <div class="estates-view">
    <div
      class="search-bar d-grid j-c-c a-i-c"
      style="
        gap: 5px;
        background-color: rgba(0, 0, 0, 0.8);
        color: whitesmoke;
        grid-template-columns: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;
      "
    >
      <!-- Cities -->
      <div class="item">
        <div class="d-block my-3">
          <h3>City</h3>
          <select v-model="city" class="my-inp" @change="getCityId()">
            <option disabled selected value="Please choose a city">
              Please choose a city
            </option>
            <option
              v-for="(item, index) in cities"
              :key="index"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <!--  -->
      <!-- places -->
      <div class="item">
        <div class="d-block my-3">
          <h3>Place</h3>
          <select v-model="place" class="my-inp" @change="getPlaceId()">
            <option disabled selected value="Please choose a place">
              Please choose a place
            </option>
            <option
              v-for="(item, index) in places"
              :key="index"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- space from -->
      <div class="item">
        <div class="d-block my-3">
          <h3>space_from</h3>
          <input
            type="number"
            v-model="$store.state.space_from"
            class="my-inp"
          />
        </div>
      </div>
      <!-- space to -->
      <div class="item">
        <div class="d-block my-3">
          <h3>space to</h3>
          <input type="number" v-model="$store.state.space_to" class="my-inp" />
        </div>
      </div>
      <!-- price from -->
      <div class="item">
        <div class="d-block my-3">
          <h3>price_from</h3>
          <input
            type="number"
            v-model="$store.state.price_from"
            class="my-inp"
          />
        </div>
      </div>
      <!-- price to -->
      <div class="item">
        <div class="d-block my-3">
          <h3>price to</h3>
          <input type="number" v-model="$store.state.price_to" class="my-inp" />
        </div>
      </div>
      <!-- Kind -->
      <div class="item">
        <div class="d-block my-3">
          <h3>Kind</h3>
          <select type="number" v-model="$store.state.kind" class="my-inp">
            <option value="Sell">Sell</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
      </div>
      <!--  -->
      <!-- Rent Kind -->
      <div class="item" v-if="$store.state.kind == 'Rent'">
        <div class="d-block my-3">
          <h3>Rent Kind</h3>
          <select v-model="$store.state.rent_kind" class="my-inp">
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>
      <!--  -->
      <!-- type -->
      <div class="item">
        <div class="d-block my-3">
          <h3>Type</h3>
          <select v-model="$store.state.type" class="my-inp">
            <option
              v-for="(item, index) in $store.state.types"
              :key="index"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- Is furnished -->
      <div class="item">
        <div class="d-block my-3">
          <h3>Is furnished</h3>
          <select
            type="number"
            v-model="$store.state.is_furnished"
            class="my-inp"
          >
            <option value="Furnished">Furnished</option>
            <option value="Half furnished">Half furnished</option>
            <option value="Not furnished">Not furnished</option>
          </select>
        </div>
      </div>
      <!--  -->
      <!-- num_of_bedrooms -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_bedrooms</h3>
          <input
            type="number"
            v-model="$store.state.num_of_bedrooms"
            class="my-inp"
          />
        </div>
      </div>
      <!-- num_of_livingrooms -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_livingrooms</h3>
          <input
            type="number"
            v-model="$store.state.num_of_livingrooms"
            class="my-inp"
          />
        </div>
      </div>
      <!-- num_of_bathrooms -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_bathrooms</h3>
          <input
            type="number"
            v-model="$store.state.num_of_bathrooms"
            class="my-inp"
          />
        </div>
      </div>
      <!-- num_of_reciption -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_reciption</h3>
          <input
            type="number"
            v-model="$store.state.num_of_reciption"
            class="my-inp"
          />
        </div>
      </div>
      <!-- num_of_kitchens -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_kitchens</h3>
          <input
            type="number"
            v-model="$store.state.num_of_kitchens"
            class="my-inp"
          />
        </div>
      </div>
      <!-- num_of_balconies -->
      <div class="item">
        <div class="d-block my-3">
          <h3>num_of_balconies</h3>
          <input
            type="number"
            v-model="$store.state.num_of_balconies"
            class="my-inp"
          />
        </div>
      </div>
      <!-- search -->
      <div class="item">
        <div class="d-block my-3">
          <button type="submit" class="search_btn" @click="AdvancedSearch()">
            Search
          </button>
        </div>
      </div>
      <!--  -->
      <!-- delete -->
      <div class="item">
        <div class="d-block my-3">
          <button type="submit" class="delete_btn" @click="clearFilter()">
            Delete fillter
          </button>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="container d-flex j-c-c py-3">
      <div
        class="d-grid"
        style="grid-template-columns: 22% 22% 22% 22%"
        :style="{
          gap:
            shown_data.length > 3
              ? '60px'
              : shown_data.length > 2
              ? '80px'
              : '150px',
        }"
      >
        <RealestateCard
          v-for="(item, index) in shown_data"
          :key="index"
          :id="item.id"
          :image="item.images[0].image"
          :name="item.name"
          :city="item.city.name"
          :place="item.place.name"
          :price="item.price"
          :bathroom_number="item.num_of_bathrooms"
          :livingroom_number="item.num_of_livingrooms"
          :status="item.status"
          :user="item.user_qq"
          :company="item.user_qq.company"
          :agent="item.user_qq.agent"
        ></RealestateCard>
      </div>
    </div>
  </div>
</template>

<script>
import RealestateCard from "@/components/CardsComponents/RealestateCard.vue";
import store from "@/store";
import axios from "axios";
export default {
  name: "estates-view",
  components: {
    RealestateCard,
  },
  data() {
    return {
      shown_data: [],
      data: [],
      cities: [],
      places: [],
      place: "Please choose a place",
      city: "Please choose a city",
    };
  },
  methods: {
    getCityId() {
      for (let index = 0; index < this.cities.length; index++) {
        if (this.cities[index].name == this.city) {
          store.state.city_id = this.cities[index].id;
          this.getPlaces();
          return;
        }
      }
    },
    getPlaces() {
      axios
        .get(store.state.server + "api/get_all_places/" + store.state.city_id)
        .then((response) => {
          this.places = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPlaceId() {
      for (let i = 0; i < this.places.length; i++) {
        if (this.places[i].name == this.place) {
          store.state.place_id = this.places[i].id;
          return;
        }
      }
    },
    async getCiys() {
      await store.dispatch("fetchCities");
      this.cities = store.state.cities;
    },
    getData() {
      axios
        .get(store.state.server + "api/get_active_estates")
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            this.data = response.data;
            this.AdvancedSearch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    clearFilter() {
      location.reload();
    },
    AllNull() {
      if (
        store.state.city_id == null &&
        store.state.place_id == null &&
        store.state.space_from == null &&
        store.state.space_to == null &&
        store.state.price_from == null &&
        store.state.price_to == null &&
        store.state.kind == null &&
        store.state.type == null &&
        store.state.rent_kind == null &&
        store.state.is_furnished == null &&
        store.state.num_of_bedrooms == null &&
        store.state.num_of_livingrooms == null &&
        store.state.num_of_bathrooms == null &&
        store.state.num_of_reciption == null &&
        store.state.num_of_kitchens == null &&
        store.state.num_of_balconies == null
      ) {
        return true;
      }
    },

    AdvancedSearch() {
      // If all filters are null, return all data
      if (this.AllNull()) {
        this.shown_data = this.data;
      } else {
        let filterData = this.data;

        // Filter by city_id
        if (store.state.city_id) {
          filterData = filterData.filter(
            (estate) => estate.city.id === store.state.city_id
          );
        }

        // Filter by place_id
        if (store.state.place_id) {
          filterData = filterData.filter(
            (estate) => estate.places_id === store.state.place_id
          );
        }

        // Filter by space range (from/to)
        if (store.state.space_from) {
          filterData = filterData.filter(
            (estate) => estate.space_of_estate >= store.state.space_from
          );
        }

        if (store.state.space_to) {
          filterData = filterData.filter(
            (estate) => estate.space_of_estate <= store.state.space_to
          );
        }

        // Filter by price range (from/to)
        if (store.state.price_from) {
          filterData = filterData.filter(
            (estate) => estate.price >= store.state.price_from
          );
        }
        if (store.state.price_to) {
          filterData = filterData.filter(
            (estate) => estate.price <= store.state.price_to
          );
        }

        // Filter by kind (e.g., apartment, villa, etc.)
        if (store.state.kind) {
          filterData = filterData.filter(
            (estate) => estate.kind_text === store.state.kind
          );
        }

        // Filter by type (e.g., rent or sale)
        if (store.state.type) {
          filterData = filterData.filter(
            (estate) => estate.type_text === store.state.type
          );
        }

        // Filter by rent kind (e.g., monthly, yearly, etc.)
        if (store.state.rent_kind) {
          filterData = filterData.filter(
            (estate) => estate.rent_kind === store.state.rent_kind
          );
        }

        // Filter by is_furnished (true/false)
        if (store.state.is_furnished !== null) {
          filterData = filterData.filter(
            (estate) => estate.is_furnished_text === store.state.is_furnished
          );
        }

        // Filter by number of bedrooms
        if (store.state.num_of_bedrooms) {
          filterData = filterData.filter(
            (estate) => estate.num_of_bedrooms == store.state.num_of_bedrooms
          );
        }

        // Filter by number of living rooms
        if (store.state.num_of_livingrooms) {
          filterData = filterData.filter(
            (estate) =>
              estate.num_of_livingrooms == store.state.num_of_livingrooms
          );
        }

        // Filter by number of bathrooms
        if (store.state.num_of_bathrooms) {
          filterData = filterData.filter(
            (estate) => estate.num_of_bathrooms == store.state.num_of_bathrooms
          );
        }

        // Filter by number of reception rooms
        if (store.state.num_of_reciption) {
          filterData = filterData.filter(
            (estate) => estate.num_of_receptions == store.state.num_of_reciption
          );
        }

        // Filter by number of kitchens
        if (store.state.num_of_kitchens) {
          filterData = filterData.filter(
            (estate) => estate.num_of_kitchens == store.state.num_of_kitchens
          );
        }

        // Filter by number of balconies
        if (store.state.num_of_balconies) {
          filterData = filterData.filter(
            (estate) => estate.num_of_balconies == store.state.num_of_balconies
          );
        }

        // Set the filtered data
        this.shown_data = filterData;
      }
    },
  },

  mounted() {
    this.getData();
    this.getCiys();
  },
};
</script>

<style scoped>
.item {
  width: 90%;
}

.search_btn {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  background-color: orange;
  border: none;
  color: whitesmoke;
  cursor: pointer;
}

.delete_btn {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  background-color: crimson;
  border: none;
  color: whitesmoke;
  cursor: pointer;
}
</style>
