<template>
  <h2>Currently</h2>
  <h3>Wed, February 23 1:45 PM</h3>
  <div class="temperature-container">
    <div class="weather-icon"></div>
    <p class="temperature">7°</p>
  </div>
  <div>10°/0° | Feels like -9°</div>
  <h3>Cloudy</h3>
</template>

<style scoped>
* {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.temperature-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.weather-icon {
  display: block;

  background-color: #aaaaaa;
  height: 6rem;
  width: 6rem;
}
.temperature {
  margin-left: 2rem;
  line-height: 0.75;
  font-size: 10rem;
}
</style>