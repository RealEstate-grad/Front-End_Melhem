<template>
  <div class="add-edit">
    <div
      class="container d-flex j-c-c a-i-s py-3"
      style="height: fit-content; overflow-y: hidden"
    >
      <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
        <div class="d-block w-75">
          <h1>{{ page_type }} real estate</h1>
          <form
            @submit.prevent="page_type == 'Edit' ? EditEstate() : AddEstate()"
          >
            <!-- name -->
            <div class="d-block">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Estate name"
                v-model="name"
                class="my-inp"
              />
            </div>
            <!-- real_number -->
            <div class="d-block my-3">
              <input
                type="text"
                name="real_number"
                id="real_number"
                placeholder="real_number"
                v-model="real_number"
                class="my-inp"
              />
            </div>
            <!-- date_of_build -->
            <div class="d-block my-3">
              <h2>Date of build</h2>
              <input
                type="date"
                name="date_of_build"
                id="date_of_build"
                placeholder="date_of_build"
                v-model="date_of_build"
                class="my-inp"
              />
            </div>
            <!-- Cities -->
            <div class="d-block my-3">
              <h2>City</h2>
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
            <!--  -->
            <!-- places -->
            <div class="d-block my-3">
              <h2>Place</h2>
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
            <!-- phone -->
            <div class="d-block my-3">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                v-model="phone"
                class="my-inp"
              />
              <!-- for country code -->
              <div class="country-code-dropdown d-flex j-c-c a-i-c">
                <div
                  class="my-inp-drp d-flex j-c-c a-i-c"
                  @click="
                    shown_hidden == 'none'
                      ? (shown_hidden = 'block')
                      : (shown_hidden = 'none')
                  "
                >
                  <span
                    :class="
                      selected_flag == 'PR2'
                        ? 'mx-1 fi fi-pr'
                        : selected_flag == 'DO2'
                        ? 'mx-1 fi fi-do'
                        : 'mx-1 fi fi-' + selected_flag.toLocaleLowerCase()
                    "
                  ></span>
                  {{ countre_code_phone }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="non-zero"
                      d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                    />
                  </svg>
                </div>
                <div class="my-drp-down" :style="{ display: shown_hidden }">
                  <div
                    v-for="(item, index) in phonecodes"
                    :value="item"
                    :key="index"
                    @click="
                      selected_flag = index;
                      countre_code_phone = item;
                      shown_hidden = 'none';
                    "
                  >
                    <div
                      class="w-100"
                      :style="{
                        backgroundColor:
                          index.toLocaleLowerCase() ==
                          selected_flag.toLocaleLowerCase()
                            ? 'rgba(10, 16, 27, 0.75)'
                            : 'whitesmoke',
                      }"
                    >
                      <span
                        :class="
                          index == 'PR2'
                            ? 'mx-1 fi fi-pr'
                            : index == 'DO2'
                            ? 'mx-1 fi fi-do'
                            : 'mx-1 fi fi-' + index.toLocaleLowerCase()
                        "
                      ></span
                      >{{ item }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- space -->
            <div class="d-block">
              <input
                type="text"
                name="space"
                id="space"
                placeholder="Space of estate"
                v-model="space_of_estate"
                class="my-inp"
              />
            </div>
            <!-- price -->
            <div class="d-block my-3">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="price"
                v-model="price"
                class="my-inp"
              />
            </div>
            <!-- price of meter -->
            <div class="d-block my-3">
              <input
                type="number"
                name="pricem"
                id="pricem"
                placeholder="Price of meter"
                v-model="price_of_meter"
                class="my-inp"
              />
            </div>
            <!-- furnished -->
            <div class="d-block my-3">
              <h2>Is the estate furnished?</h2>
              <select v-model="is_furnished" class="my-inp">
                <option
                  disabled
                  selected
                  value="Select if the estate is furnished or not"
                >
                  Select if the estate is furnished or not
                </option>
                <option value="Furnished">Furnished</option>
                <option value="Half furnished">Half furnished</option>
                <option value="Not furnished">Not furnished</option>
              </select>
            </div>
            <!-- state of build -->
            <div class="d-block my-3">
              <h2>Building state</h2>
              <select v-model="state_of_build" class="my-inp">
                <option disabled selected value=""></option>
                <option value="Built">Built</option>
                <option value="Under construction">Under construction</option>
                <option value="Not built">Not built</option>
              </select>
            </div>
            <!-- floor -->
            <div class="d-block my-3">
              <input
                type="number"
                name="floor"
                id="floor"
                placeholder="floor"
                v-model="floor"
                class="my-inp"
              />
            </div>
            <!-- num_of_bedrooms -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_bedrooms"
                id="num_of_bedrooms"
                placeholder="num_of_bedrooms"
                v-model="num_of_bedrooms"
                class="my-inp"
              />
            </div>
            <!-- num_of_livingrooms -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_livingrooms"
                id="num_of_livingrooms"
                placeholder="num_of_livingrooms"
                v-model="num_of_livingrooms"
                class="my-inp"
              />
            </div>
            <!-- num_of_receptions -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_receptions"
                id="num_of_receptions"
                placeholder="num_of_receptions"
                v-model="num_of_receptions"
                class="my-inp"
              />
            </div>
            <!-- num_of_bathrooms -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_bathrooms"
                id="num_of_bathrooms"
                placeholder="num_of_bathrooms"
                v-model="num_of_bathrooms"
                class="my-inp"
              />
            </div>
            <!-- num_of_kitchens -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_kitchens"
                id="num_of_kitchens"
                placeholder="num_of_kitchens"
                v-model="num_of_kitchens"
                class="my-inp"
              />
            </div>
            <!-- num_of_balconies -->
            <div class="d-block my-3">
              <input
                type="number"
                name="num_of_balconies"
                id="num_of_balconies"
                placeholder="num_of_balconies"
                v-model="num_of_balconies"
                class="my-inp"
              />
            </div>
            <!-- types -->
            <div class="d-block my-3">
              <h2>Type</h2>
              <select v-model="type" class="my-inp" @change="getPlaceId()">
                <option disabled selected value="Please choose estate type">
                  Please choose estate type
                </option>
                <option
                  v-for="(item, index) in $store.state.types"
                  :key="index"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <!-- kind -->
            <div class="d-block my-3">
              <h2>Sell or rent?</h2>
              <select v-model="kind" class="my-inp">
                <option disabled selected value=""></option>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            <!-- rent kind -->
            <div class="d-block my-3" v-if="kind == 'Rent'">
              <h2>Rent type?</h2>
              <select v-model="rent_kind" class="my-inp">
                <option disabled selected value=""></option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <!-- rent desctiptoin -->
            <div class="d-block my-3" v-if="kind == 'Rent'">
              <textarea
                class="my-inp"
                placeholder="Rent Description"
                v-model="rent_description"
                style="height: 100px; padding: 10px 10px"
              ></textarea>
            </div>
            <!-- desctiptoin -->
            <div class="d-block my-3">
              <textarea
                class="my-inp"
                placeholder="Description"
                v-model="description"
                style="height: 100px; padding: 10px 10px"
              ></textarea>
            </div>
            <!-- facebook -->
            <div class="d-block my-3">
              <input
                type="text"
                name="facebook"
                id="facebook"
                placeholder="facebook"
                v-model="facebook"
                class="my-inp"
              />
            </div>
            <!-- instagram -->
            <div class="d-block my-3">
              <input
                type="text"
                name="instagram"
                id="instagram"
                placeholder="instagram"
                v-model="instagram"
                class="my-inp"
              />
            </div>
            <!-- Estate_images -->
            <div class="d-block my-3">
              <h2>Estate Images</h2>
              <input
                type="file"
                name="images"
                id="images"
                class="my-inp"
                accept="image/*"
                multiple
              />
            </div>
            <!-- Estate_videos -->
            <div class="d-block my-3">
              <h2>Estate videos</h2>
              <input
                type="file"
                name="videos"
                id="videos"
                class="my-inp"
                accept="video/*"
                multiple
              />
            </div>
            <div class="d-block py-3">
              <button type="submit" class="SubmitButton">Add</button>
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
    page_type: String,
  },
  data() {
    return {
      // get data
      cities: [],
      places: [],
      place: "Please choose a place",
      city: "Please choose a city",
      city_id: "",

      name: "",
      phone: "",
      country_code_phone: "+963",
      space_of_estate: "",
      price: "",
      price_of_meter: "",
      place_id: "",
      is_furnished: "Select if the estate is furnished or not",
      floor: "",
      num_of_bedrooms: "",
      num_of_livingrooms: "",
      num_of_receptions: "",
      num_of_bathrooms: "",
      num_of_kitchens: "",
      num_of_balconies: "",
      type: "Please choose estate type",
      kind: "",
      rent_kind: "",
      rent_description: "",
      facebook: "",
      instagram: "",
      description: "",
      real_number: "",
      date_of_build: "",
      state_of_build: "",

      selected_flag: "SY",
      shown_hidden: "none",
      phonecodes: {
        BD: "+880",
        BE: "+32",
        BF: "+226",
        BG: "+359",
        BA: "+387",
        BB: "+1-246",
        WF: "+681",
        BL: "+590",
        BM: "+1-441",
        BN: "+673",
        BO: "+591",
        BH: "+973",
        BI: "+257",
        BJ: "+229",
        BT: "+975",
        JM: "+1-876",
        BV: "+47",
        BW: "+267",
        WS: "+685",
        BQ: "+599",
        BR: "+55",
        BS: "+1-242",
        JE: "+44-1534",
        BY: "+375",
        BZ: "+501",
        RU: "+7",
        RW: "+250",
        RS: "+381",
        TL: "+670",
        RE: "+262",
        TM: "+993",
        TJ: "+992",
        RO: "+40",
        TK: "+690",
        GW: "+245",
        GU: "+1-671",
        GT: "+502",
        GS: "+500",
        GR: "+30",
        GQ: "+240",
        GP: "+590",
        JP: "+81",
        GY: "+592",
        GG: "+44-1481",
        GF: "+594",
        GE: "+995",
        GD: "+1-473",
        GB: "+44",
        GA: "+241",
        SV: "+503",
        GN: "+224",
        GM: "+220",
        GL: "+299",
        GI: "+350",
        GH: "+233",
        OM: "+968",
        TN: "+216",
        JO: "+962",
        HR: "+385",
        HT: "+509",
        HU: "+36",
        HK: "+852",
        HN: "+504",
        HM: "+61",
        VE: "+58",
        PR: "+1-787",
        PR2: "1-939",
        PS: "+970",
        PW: "+680",
        PT: "+351",
        SJ: "+47",
        PY: "+595",
        IQ: "+964",
        PA: "+507",
        PF: "+689",
        PG: "+675",
        PE: "+51",
        PK: "+92",
        PH: "+63",
        PN: "+870",
        PL: "+48",
        PM: "+508",
        ZM: "+260",
        EH: "+212",
        EE: "+372",
        EG: "+20",
        ZA: "+27",
        EC: "+593",
        IT: "+39",
        VN: "+84",
        SB: "+677",
        ET: "+251",
        SO: "+252",
        ZW: "+263",
        SA: "+966",
        ES: "+34",
        ER: "+291",
        ME: "+382",
        MD: "+373",
        MG: "+261",
        MF: "+590",
        MA: "+212",
        MC: "+377",
        UZ: "+998",
        MM: "+95",
        ML: "+223",
        MO: "+853",
        MN: "+976",
        MH: "+692",
        MK: "+389",
        MU: "+230",
        MT: "+356",
        MW: "+265",
        MV: "+960",
        MQ: "+596",
        MP: "+1-670",
        MS: "+1-664",
        MR: "+222",
        IM: "+44-1624",
        UG: "+256",
        TZ: "+255",
        MY: "+60",
        MX: "+52",
        IL: "+972",
        FR: "+33",
        IO: "+246",
        SH: "+290",
        FI: "+358",
        FJ: "+679",
        FK: "+500",
        FM: "+691",
        FO: "+298",
        NI: "+505",
        NL: "+31",
        NO: "+47",
        NA: "+264",
        VU: "+678",
        NC: "+687",
        NE: "+227",
        NF: "+672",
        NG: "+234",
        NZ: "+64",
        NP: "+977",
        NR: "+674",
        NU: "+683",
        CK: "+682",
        XK: "+383",
        CI: "+225",
        CH: "+41",
        CO: "+57",
        CN: "+86",
        CM: "+237",
        CL: "+56",
        CC: "+61",
        CA: "+1",
        CG: "+242",
        CF: "+236",
        CD: "+243",
        CZ: "+420",
        CY: "+357",
        CX: "+61",
        CR: "+506",
        CW: "+599",
        CV: "+238",
        CU: "+53",
        SZ: "+268",
        SY: "+963",
        SX: "+599",
        KG: "+996",
        KE: "+254",
        SS: "+211",
        SR: "+597",
        KI: "+686",
        KH: "+855",
        KN: "+1-869",
        KM: "+269",
        ST: "+239",
        SK: "+421",
        KR: "+82",
        SI: "+386",
        KP: "+850",
        KW: "+965",
        SN: "+221",
        SM: "+378",
        SL: "+232",
        SC: "+248",
        KZ: "+7",
        KY: "+1-345",
        SG: "+65",
        SE: "+46",
        SD: "+249",
        DO: "+1-809",
        DO2: "+1-829",
        DM: "+1-767",
        DJ: "+253",
        DK: "+45",
        VG: "+1-284",
        DE: "+49",
        YE: "+967",
        DZ: "+213",
        US: "+1",
        UY: "+598",
        YT: "+262",
        UM: "+1",
        LB: "+961",
        LC: "+1-758",
        LA: "+856",
        TV: "+688",
        TW: "+886",
        TT: "+1-868",
        TR: "+90",
        LK: "+94",
        LI: "+423",
        LV: "+371",
        TO: "+676",
        LT: "+370",
        LU: "+352",
        LR: "+231",
        LS: "+266",
        TH: "+66",
        TG: "+228",
        TD: "+235",
        TC: "+1-649",
        LY: "+218",
        VA: "+379",
        VC: "+1-784",
        AE: "+971",
        AD: "+376",
        AG: "+1-268",
        AF: "+93",
        AI: "+1-264",
        VI: "+1-340",
        IS: "+354",
        IR: "+98",
        AM: "+374",
        AL: "+355",
        AO: "+244",
        AQ: "+672",
        AS: "+1-684",
        AR: "+54",
        AU: "+61",
        AT: "+43",
        AW: "+297",
        IN: "+91",
        AX: "+358-18",
        AZ: "+994",
        IE: "+353",
        ID: "+62",
        UA: "+380",
        QA: "+974",
        MZ: "+258",
      },
    };
  },
  methods: {
    ValidateForm() {
      if (
        this.name == "" ||
        this.real_number == "" ||
        this.date_of_build == "" ||
        this.place_id == "" ||
        this.phone == "" ||
        this.space_of_estate == "" ||
        this.price == "" ||
        this.price_of_meter == "" ||
        this.is_furnished == "Select if the estate is furnished or not" ||
        this.state_of_build == "" ||
        this.floor == "" ||
        this.num_of_bedrooms == "" ||
        this.num_of_livingrooms == "" ||
        this.num_of_receptions == "" ||
        this.num_of_bathrooms == "" ||
        this.num_of_kitchens == "" ||
        this.num_of_balconies == "" ||
        this.type == "" ||
        this.type == "" ||
        this.description == ""
      ) {
        alert("Fill all the required fields please");
        return false;
      } else if (
        this.kind == "Rent" &&
        this.rent_kind == "" &&
        this.rent_description == ""
      ) {
        alert("Fill all the required fields please");
        return false;
      }
      // Phone number validation (only digits)
      const phonePattern = /^\d+$/; // Matches only numbers
      if (!phonePattern.test(this.phone)) {
        alert("Phone number must contain only numbers.");
        return false;
      }
      return true;
    },
    AddEstate() {
      if (this.ValidateForm()) {
        const form = new FormData();
        form.append("facebook", this.facebook);
        form.append("instagram", this.instagram);
        form.append("name", this.name);
        form.append("places_id", this.place_id);
        form.append("phone", this.phone);
        form.append("country_code_phone", this.country_code_phone);
        form.append("space_of_estate", this.space_of_estate);
        form.append("price_of_meter", this.price_of_meter);
        form.append("rent_kind", this.rent_kind);
        form.append("is_furnished_text", this.is_furnished);
        form.append("floor", this.floor);
        form.append("num_of_bedrooms", this.num_of_bedrooms);
        form.append("kind_text", this.kind);
        form.append("num_of_receptions", this.num_of_receptions);
        form.append("num_of_bathrooms", this.num_of_bathrooms);
        form.append("num_of_livingrooms", this.num_of_livingrooms);
        form.append("num_of_kitchens", this.num_of_kitchens);
        form.append("num_of_balconies", this.num_of_balconies);
        form.append("type_text", this.type);
        form.append("description", this.description);
        form.append("price", this.price);
        form.append("real_number", this.real_number);
        form.append("date_of_build", this.date_of_build);
        form.append("state_of_build", this.state_of_build);
        form.append("rent_description", this.rent_description);

        const images = document.querySelector("#images");
        const imagesFiles = images.files;
        const videos = document.querySelector("#videos");
        const videosFiles = videos.files;

        if (imagesFiles.length > 0) {
          for (let i = 0; i < imagesFiles.length; i++) {
            form.append(`images[${i}]`, imagesFiles[i]);
          }
        } else {
          alert("Add photos");
          return false;
        }

        if (videosFiles.length > 0) {
          for (let i = 0; i < videosFiles.length; i++) {
            form.append(`videos[${i}]`, videosFiles[i]);
          }
        } else {
          alert("Add videos");
          return false;
        }

        axios
          .post(store.state.server + "api/add_estate", form, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${store.state.token}`,
            },
          })
          .then((response) => {
            if (response.statusText == "OK") {
              alert("Your request has been applied");
              if (store.state.user_type == "company") {
                router.push("/company-estates");
              } else {
                router.push("/agent-estates");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    EditEstate() {
      // if (this.ValidateForm()) {
      // }
    },
    getCityId() {
      for (let index = 0; index < this.cities.length; index++) {
        if (this.cities[index].name == this.city) {
          this.city_id = this.cities[index].id;
          this.getPlaces();
          return;
        }
      }
    },
    getPlaces() {
      axios
        .get(store.state.server + "api/get_all_places/" + this.city_id)
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
          this.place_id = this.places[i].id;
          return;
        }
      }
    },
    async getCiys() {
      await store.dispatch("fetchCities");
      this.cities = store.state.cities;
    },
  },
  mounted() {
    this.getCiys();
  },
};
</script>
