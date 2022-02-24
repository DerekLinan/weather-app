<template>
  <h2>Currently</h2>
  <h3>Wed, February 23 1:45 PM</h3>
  <div class="temperature-container">
    <div class="weather-icon">
      <img
        src="//cdn.weatherapi.com/weather/64x64/night/116.png"
        alt="cloudy"
      />
    </div>
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
img {
  margin: 0;
  height: 100%;
  font-size: 1.5rem;
  text-align: center;
}
.temperature-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.weather-icon {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 7rem;
  width: 7rem;
}
.temperature {
  margin-left: 2rem;
  line-height: 0.75;
  font-size: 10rem;
}
</style>