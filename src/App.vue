<template>
  <div class="root" :class="styleBackground">
    <h1 v-if="foundSearch">{{ locationData.location.name }}</h1>
    <SearchLocationBar
      :country="ifCountry"
      @searchSubmitted="handleSearchSubmission"
    />
    <div v-if="foundSearch" class="content">
      <CurrentWeather :currentData="locationData" :isMetric="useMetric" />
      <hr />
      <CurrentConditions :currentData="locationData" :isMetric="useMetric" />
      <hr />
    </div>
    <AppFooter :time="updatedAt" />
  </div>
</template>

<script>
import SearchLocationBar from "./components/SearchLocationBar.vue";
import AppFooter from "./components/AppFooter.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import CurrentConditions from "./components/CurrentConditions.vue";

import { getCurrentWeather } from "./scripts/LoadUtils.js";

export default {
  name: "App",
  data() {
    return {
      locationData: {},
      foundSearch: false,
      useMetric: false,
      updatedAt: undefined,
      isDay: true,
    };
  },
  components: {
    SearchLocationBar,
    AppFooter,
    CurrentWeather,
    CurrentConditions,
  },
  methods: {
    handleSearchSubmission(search) {
      this.foundSearch = false;
      this.updatedAt = undefined;
      getCurrentWeather(search)
        .then((res) => {
          this.locationData = res.data;
          this.foundSearch = true;
          this.isDay = res.data.current.is_day;

          const time = new Date();
          const h = time.getHours();
          const m = time.getMinutes().toString().padStart(2, "0");
          this.updatedAt =
            h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
        })
        .catch((e) => {
          alert(e.response.data.error.message);
        });
    },
  },
  computed: {
    ifCountry() {
      return this.foundSearch ? this.locationData.location.country : "";
    },
    styleBackground() {
      return this.isDay ? "day" : "night";
    },
  },
};
</script>

<style>
* {
  border: none;
  margin: 0;
  padding: 0;
}
a:visited {
  color: pink;
}
button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
button:active {
  filter: brightness(50%);
}
h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.35);
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
  font-weight: normal;
}
h4 {
  font-size: 1.5rem;
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
.root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
}
.day {
  background: rgb(0, 255, 222);
  background: linear-gradient(
    180deg,
    rgba(0, 245, 222, 1) 0%,
    rgba(0, 167, 205, 1) 50%,
    rgba(53, 19, 95, 1) 100%
  );
}
.night {
  background: rgb(127, 0, 140);
  background: linear-gradient(
    0deg,
    rgba(127, 0, 140, 1) 0%,
    rgba(0, 11, 161, 1) 63%,
    rgba(0, 0, 0, 1) 100%
  );
}
.selectable:hover {
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.selectable {
  user-select: none;
}
.open-arrow {
  font-size: 0px;
  line-height: 0%;
  width: 0px;
  border-top: 24px solid white;
  border-left: 12px solid rgba(0, 0, 0, 0);
  border-right: 12px solid rgba(0, 0, 0, 0);
}
.close-arrow {
  font-size: 0px;
  line-height: 0%;
  width: 0px;
  border-bottom: 24px solid white;
  border-left: 12px solid rgba(0, 0, 0, 0);
  border-right: 12px solid rgba(0, 0, 0, 0);
}
</style>