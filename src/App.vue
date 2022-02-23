<template>
  <h1>Weather App</h1>
  <div class="content">
    <SearchLocationBar />
    <CurrentWeather />
    <hr />
  </div>
  <AppFooter />
</template>

<script>
import CurrentWeather from "./components/CurrentWeather.vue";
import SearchLocationBar from "./components/SearchLocationBar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    SearchLocationBar,
    CurrentWeather,
    AppFooter,
  },
};
</script>

<style>
* {
  border: none;
  margin: 0;
  padding: 0;
}
hr {
  height: 1px;
  background-color: white;
  margin: 1rem;
}
.content {
  flex-grow: 1;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background: rgb(0, 255, 222);
  background: linear-gradient(
    5deg,
    rgba(0, 255, 222, 1) 0%,
    rgba(0, 237, 255, 1) 30%,
    rgba(167, 119, 255, 1) 100%
  );
}
</style>