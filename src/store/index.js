import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    server: "http://127.0.0.1:8000/",
    token: "",
    user_type: "",
    id: "",
    estate_id: "",
    agent_id: "",
    company_id: "",
    citys: [],
    types: {
      0: {
        id: 13,
        name: "Villa",
        icon: "material-symbols:villa-rounded",
      },
      1: {
        id: 14,
        name: "Home",
        icon: "ic:round-house",
      },
      2: {
        id: 15,
        name: "Apartment",
        icon: "fluent-emoji-high-contrast:department-store",
      },
      3: {
        id: 16,
        name: "Residential land",
        icon: "maki:residential-community",
      },
      4: {
        id: 4,
        name: "Office",
        icon: "ph:office-chair-fill",
      },
      5: {
        id: 5,
        name: "Hotel",
        icon: "ri:hotel-line",
      },
      6: {
        id: 6,
        name: "Commercial Apartment",
        icon: "ic:baseline-apartment",
      },
      7: {
        id: 7,
        name: "Commercial land",
        icon: "emojione-monotone:umbrella-on-ground",
      },
      8: {
        id: 8,
        name: "Commercial house",
        icon: "game-icons:house",
      },
      9: {
        id: 9,
        name: "Commercial building",
        icon: "fa6-solid:building",
      },
      10: {
        id: 10,
        name: "Commercial warehouse",
        icon: "nimbus:store",
      },
      11: {
        id: 11,
        name: "Commercial Shop",
        icon: "solar:shop-2-bold",
      },
      12: {
        id: 12,
        name: "Commercial Floor",
        icon: "mdi:floor-plan",
      },
      13: {
        id: 1,
        name: "Agricultural Land",
        icon: "mdi:beach",
        color: "black",
      },
      14: {
        id: 2,
        name: "Agricultural House",
        icon: "simple-icons:homeassistant",
        color: "black",
      },
      15: {
        id: 3,
        name: "Farm",
        icon: "game-icons:ground-sprout",
        color: "black",
      },
    },
    // Search items
    city_id: null,
    place_id: null,
    space_from: null,
    space_to: null,
    price_from: null,
    price_to: null,
    kind: null,
    type: null,
    rent_kind: null,
    is_furnished: null,
    num_of_bedrooms: null,
    num_of_livingrooms: null,
    num_of_bathrooms: null,
    num_of_reciption: null,
    num_of_kitchens: null,
    num_of_balconies: null,
    // end search items
  },
  getters: {},
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
  },

  actions: {
    async fetchCities({ commit, state }) {
      try {
        const response = await axios.get(state.server + "api/get_all_cities");
        commit("setCities", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
