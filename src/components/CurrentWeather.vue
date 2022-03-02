<template>
  <h2>Currently</h2>
  <h3 class="multi-line">
    {{ getLocalDateTime }}
  </h3>
  <div class="temperature-container">
    <div class="weather-icon">
      <img
        :src="this.currentData.current.condition.icon"
        :alt="this.currentData.current.condition.text"
      />
    </div>
    <p class="temperature">{{ getTemperature }}</p>
  </div>
  <h4>Feels like {{ getFeelsLike }}°</h4>
  <h3>{{ this.currentData.current.condition.text }} weather</h3>
</template>
<script>
export default {
  props: {
    currentData: {},
    isMetric: Boolean,
  },
  computed: {
    getTemperature() {
      const { current } = this.currentData;
      return this.isMetric ? current.temp_c + "C" : current.temp_f + "F";
    },
    getFeelsLike() {
      const { current } = this.currentData;
      return this.isMetric ? current.feelslike_c : current.feelslike_f;
    },
    getLocalDateTime() {
      const localDate = this.currentData.location.localtime;
      const dateObject = new Date(localDate);
      const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const time = localDate.split(" ")[1];
      return (
        dateObject.toLocaleDateString("en-US", options) +
        ` ${time}\n${this.currentData.location.tz_id} timezone`
      );
    },
  },
};
</script>

<style scoped>
* {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
img {
  object-fit: contain;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
}
.multi-line {
  white-space: pre-wrap;
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