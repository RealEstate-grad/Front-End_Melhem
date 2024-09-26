<template>
  <div class="home-view">
    <div class="search-bar">
      <!-- search background -->
      <div class="backGround"></div>
      <div class="blackBg"></div>
      <!-- search background -->
      <!-- search bar -->
      <div class="search">
        <h1 style="color: whitesmoke">Welcome to our website</h1>
        <form
          class="d-flex j-c-c a-i-c bar"
          @submit.prevent="$router.push('/real-estates')"
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
          <!--  -->
          <!-- bedrooms -->
          <div class="item">
            <div class="d-block my-3">
              <h3>Bedrooms</h3>
              <input
                type="number"
                v-model="$store.state.num_of_bedrooms"
                class="my-inp"
                min="0"
              />
            </div>
          </div>
          <!--  -->
          <!-- Bathrooms -->
          <div class="item">
            <div class="d-block my-3">
              <h3>Bathrooms</h3>
              <input
                type="number"
                v-model="$store.state.num_of_bathrooms"
                class="my-inp"
                min="0"
              />
            </div>
          </div>
          <!--  -->
          <!-- search -->
          <div class="item">
            <div class="d-block my-3">
              <button type="submit" class="search_btn">Search</button>
            </div>
          </div>
          <!--  -->
        </form>
      </div>
      <!-- search bar -->
    </div>
    <div class="home-body">
      <!-- Citys -->
      <div class="section">
        <HomepageBackground></HomepageBackground>

        <div class="section-title">
          <h2>
            <Icon icon="fluent:city-16-filled" width="24" height="24" />
            Cities
          </h2>
          <div class="section-line"></div>
        </div>
        <div class="section-content">
          <swiper
            :modules="modules"
            slides-per-view="4"
            space-between="0"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            style="height: 400px"
          >
            <swiper-slide v-for="(item, index) in cities" :key="index">
              <CityCard :city="item"></CityCard>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--  -->
      <!-- companies -->
      <div class="section">
        <HomepageBackground></HomepageBackground>

        <div class="section-title">
          <h2>
            <Icon icon="mdi:company" width="24" height="24" />
            Companies
          </h2>
          <div class="section-line"></div>
        </div>
        <div class="section-content">
          <swiper
            :modules="modules"
            slides-per-view="4"
            space-between="0"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            style="height: 400px"
          >
            <swiper-slide v-for="(item, index) in companies" :key="index">
              <CompanyCard :company="item"></CompanyCard>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--  -->
      <!-- Agents -->
      <div class="section">
        <HomepageBackground></HomepageBackground>

        <div class="section-title">
          <h2>
            <Icon icon="clarity:employee-group-solid" width="24" height="24" />
            Agents
          </h2>
          <div class="section-line"></div>
        </div>
        <div class="section-content">
          <swiper
            :modules="modules"
            slides-per-view="4"
            space-between="0"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            style="height: 400px"
          >
            <swiper-slide v-for="(item, index) in agents" :key="index">
              <AgentCard :agent="item"></AgentCard>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--  -->
      <!-- Estates -->
      <div class="section">
        <HomepageBackground></HomepageBackground>

        <div class="section-title">
          <h2>
            <Icon icon="material-symbols:home" width="24" height="24" />
            Estates
          </h2>
          <div class="section-line"></div>
        </div>
        <div class="section-content">
          <swiper
            :modules="modules"
            slides-per-view="4"
            space-between="0"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            style="height: 400px"
          >
            <swiper-slide v-for="(item, index) in estates" :key="index">
              <RealestateCard
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
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import store from "@/store";
// cards
import CityCard from "@/components/CardsComponents/CityCard.vue";
import CompanyCard from "@/components/CardsComponents/CompanyCard.vue";
import AgentCard from "@/components/CardsComponents/AgentCard.vue";
import RealestateCard from "@/components/CardsComponents/RealestateCard.vue";
//
// Background
import HomepageBackground from "@/components/HomepageBackground.vue";
//
// swiper
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Icons
import { Icon } from "@iconify/vue";

export default {
  name: "HomeView",
  data() {
    return {
      cities: [],
      places: [],
      place: "Please choose a place",
      city: "Please choose a city",
      companies: [],
      agents: [],
      estates: [],
    };
  },
  components: {
    CityCard,
    CompanyCard,
    AgentCard,
    Swiper,
    SwiperSlide,
    Icon,
    HomepageBackground,
    RealestateCard,
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
    getCompanies() {
      axios
        .get(store.state.server + "api/get_12_new_company")
        .then((response) => {
          this.companies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAgents() {
      axios
        .get(store.state.server + "api/get_12_new_ageant")
        .then((response) => {
          this.agents = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getEstates() {
      axios
        .get(store.state.server + "api/get_12_new_estate")
        .then((response) => {
          console.log(response);
          this.estates = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCiys() {
      await store.dispatch("fetchCities");
      this.cities = store.state.cities;
    },
  },
  setup() {
    var x;
    const onSwiper = (swiper) => {
      x = swiper;
      swiper = x;
    };
    const onSlideChange = () => {
      x;
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
  mounted() {
    this.getCompanies();
    this.getAgents();
    this.getEstates();
    this.getCiys();
  },
};
</script>

<style scoped>
.search-bar {
  position: relative;
}

.backGround {
  background: url("../assets/Images/HomePage/BackGround.jpg");
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.blackBg {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: black;
  opacity: 0.4;
}

.search {
  width: 100%;
  height: 380px;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
}

.bar {
  background-color: rgba(3, 3, 18, 0.5);
  width: 80%;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7),
    10px 10px 10px 10px rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}

.my-inp {
  width: 220px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.search_btn {
  width: 140px;
  background-color: crimson;
  height: 60px;
  color: whitesmoke;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-size: 18px;
}

.home-body {
  padding: 50px;
}

.section-title {
  text-align: start;
  margin: 30px 0 0 0;
  width: fit-content;
}

.section {
  position: relative;
}
</style>
