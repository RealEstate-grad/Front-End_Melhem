<template>
  <div class="back-ground">
    <div class="backGroundColor"></div>
    <div class="backGroundImage"></div>
  </div>
</template>

<style scoped>
.backGroundColor {
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  z-index: -9;
  background: black;
  opacity: 0.4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.backGroundImage {
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  z-index: -10;
  background: url("../assets/Images/BackGround.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
