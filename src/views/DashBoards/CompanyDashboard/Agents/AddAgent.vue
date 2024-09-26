<template>
  <div class="add-agent">
    <SideBar>
      <div
        class="container d-flex j-c-c a-i-s py-3"
        style="height: fit-content; overflow-y: hidden"
      >
        <div class="card-glasmorphism w-50 p-3 font-white d-flex j-c-c a-i-c">
          <div class="d-block w-75">
            <h1>Add agent</h1>
            <form @submit.prevent="AddAgent()">
              <!-- fname -->
              <div class="d-block">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First name"
                  v-model="fname"
                  class="my-inp"
                />
              </div>
              <!-- lname -->
              <div class="d-block my-3">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                  v-model="lname"
                  class="my-inp"
                />
              </div>
              <!-- username -->
              <div class="d-block">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  v-model="username"
                  class="my-inp"
                />
              </div>
              <!-- email -->
              <div class="d-block my-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                  class="my-inp"
                />
              </div>
              <!-- password -->
              <div class="d-block my-3">
                <input
                  :type="type"
                  name="password"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                  class="my-inp"
                />
                <!-- for the eye -->
                <div
                  class="show-hide-container d-flex j-c-c a-i-c"
                  @click="ShowHidePassword()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" :d="path" />
                  </svg>
                </div>
                <!--  -->
              </div>
              <!--  -->
              <!-- check password -->
              <div class="d-block">
                <input
                  :type="type2"
                  name="password"
                  id="password"
                  placeholder="Check password"
                  v-model="confirmPassword"
                  class="my-inp"
                />
                <!-- for the eye -->
                <div
                  class="show-hide-container d-flex j-c-c a-i-c"
                  @click="ShowHidePassword2()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" :d="path2" />
                  </svg>
                </div>
                <!--  -->
              </div>
              <!-- gender -->
              <div class="d-block my-3">
                <select name="" id="" v-model="gender" class="my-inp">
                  <option selected disabled value="Please choose gender">
                    Please choose gender
                  </option>
                  <option value="Male" :selected="gender == 'Male'">
                    Male
                  </option>
                  <option value="Female" :selected="gender == 'Female'">
                    Female
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
              <!-- profile_images -->
              <div class="d-block my-3">
                <h2>Profile Image</h2>
                <input
                  type="file"
                  name="profile_images"
                  id="profile_images"
                  class="my-inp"
                  accept="image/*"
                />
              </div>
              <!-- facebook -->
              <div class="d-block my-3">
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  placeholder="Facebook"
                  v-model="facebook"
                  class="my-inp"
                />
              </div>
              <!--  -->
              <!-- instagram -->
              <div class="d-block my-3">
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Instagram"
                  v-model="instagram"
                  class="my-inp"
                />
              </div>
              <!--  -->
              <div class="d-block py-3">
                <button type="submit" class="SubmitButton">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/CompanyDashboard/SideBar.vue";
import axios from "axios";
import store from "@/store";
import router from "@/router";
export default {
  name: "add-agent",
  components: {
    SideBar,
  },
  data() {
    return {
      data: [],
      type: "password",
      type2: "password",
      path: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5",
      path2:
        "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5",
      selected_flag: "SY",
      countre_code_phone: "+963",
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
      username: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      gender: "Male",
      password: "",
      confirmPassword: "",
      facebook: "",
      instagram: "",
      subscrip_type: "agent",
    };
  },
  methods: {
    ShowHidePassword() {
      if (this.type == "password") {
        this.type = "text";
        this.path =
          "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7";
      } else {
        this.type = "password";
        this.path =
          "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5";
      }
    },
    ShowHidePassword2() {
      if (this.type2 == "password") {
        this.type2 = "text";
        this.path2 =
          "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7";
      } else {
        this.type2 = "password";
        this.path2 =
          "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5";
      }
    },
    validateForm() {
      // Check for empty fields
      if (
        !this.username ||
        !this.fname ||
        !this.lname ||
        !this.email ||
        !this.phone ||
        !this.countre_code_phone ||
        !this.gender ||
        !this.password ||
        !this.confirmPassword
      ) {
        alert("Please fill in all required fields.");
        return false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      // Phone number validation (only digits)
      const phonePattern = /^\d+$/; // Matches only numbers
      if (!phonePattern.test(this.phone)) {
        alert("Phone number must contain only numbers.");
        return false;
      }

      // Password validation
      if (this.password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
      }

      // Confirm password validation
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }

      // Additional validations can be added here as needed

      return true; // If all validations pass
    },
    AddAgent() {
      if (this.validateForm()) {
        const formdata = new FormData();
        formdata.append("username", this.username);
        formdata.append("fname", this.fname);
        formdata.append("lname", this.lname);
        formdata.append("email", this.email);
        formdata.append("phone", this.phone);
        formdata.append("countre_code_phone", this.countre_code_phone);
        formdata.append("gender", this.gender);
        formdata.append("password", this.password);
        formdata.append("facebook", this.facebook);
        formdata.append("instagram", this.instagram);
        formdata.append("type", this.subscrip_type);
        const pimage = document.querySelector("#profile_images");
        const profile_images = pimage.files[0];
        if (profile_images) {
          formdata.append("profile_images", profile_images);
        }

        axios
          .post(store.state.server + "api/add_agents", formdata, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${store.state.token}`,
            },
          })
          .then((response) => {
            if (response.statusText == "OK") {
              alert("Added successfully");
              router.push("/company-agents");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
