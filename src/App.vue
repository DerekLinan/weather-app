<template>
  <h1>Colorado Springs</h1>
  <SearchLocationBar />
  <div class="content">
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
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
  font-weight: normal;
}
hr {
  height: 1px;
  background-color: white;
  margin: 1rem;
}
.content {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  background: rgb(0, 255, 222);
  background: linear-gradient(
    180deg,
    rgba(0, 245, 222, 1) 0%,
    rgba(0, 167, 205, 1) 50%,
    rgba(53, 19, 95, 1) 100%
  );
}
</style>