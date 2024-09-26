<template>
  <div class="home-card">
    <div class="card">
      <div class="title">
        <Icon :icon="icon" width="24" height="24" />
        <span class="mx-1">{{ title }}</span>
      </div>
      <div class="body">{{ body }}</div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "home-card",
  props: {
    title: String,
    body: String,
    icon: String,
  },
  components: { Icon },
};
</script>

<style scoped>
.card {
  height: 100px;
  width: 250px;
  border: 1px solid rgb(79, 79, 79);
  border-radius: 10px;
  margin: 20px 20px;
  text-align: start;
  padding: 20px;
}
.title {
  font-size: 25px;
  font-weight: 700;
  color: black;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}
.body {
  font-size: 17px;
  font-weight: 300;
}
</style>
