<template>
  <div class="company-card">
    <div class="card">
      <div
        v-if="company.profile_images != null"
        class="card-img"
        :style="{
          background:
            'url(' + $store.state.server + company.profile_images + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        v-else
        class="card-img"
        :style="{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      ></div>

      <div
        class="card-title"
        @click="
          $store.state.company_id = company.id;
          $router.push('/company?id=' + company.id);
        "
      >
        {{ company.company_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "company-card",
  props: {
    company: Object,
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  width: 250px;
  padding: 20px;
  position: relative;
  background-color: white;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), 7px 7px 5px rgba(0, 0, 0, 0.3),
    10px 10px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
}

.card-img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(../../assets/Images/Profile/CompanyProfile.png);
  border: 1px solid rgba(121, 121, 121, 0.6);
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0 20px;
  cursor: pointer;
}
</style>
