<template>
  <h2>Current conditions</h2>
  <div class="content">
    <ListItem
      :iconSource="require('../assets/uv-index.svg')"
      text="UV Index"
      :value="currentData.current.uv.toFixed(1)"
    >
      <UVIndex :indexValue="currentData.current.uv" />
    </ListItem>
    <ListItem
      :iconSource="require('../assets/precipitation.svg')"
      text="Precipitation"
      :value="setPrecipitation"
    />
    <ListItem
      :iconSource="require('../assets/humidity.svg')"
      text="Humidity"
      :value="setHumidity"
    />
    <ListItem text="Visibility" :value="setVisibility" />
    <ListItem
      :iconSource="require('../assets/cloud.svg')"
      text="Cloud coverage"
      :value="currentData.current.cloud"
    />
    <ListItem
      :iconSource="require('../assets/compass.svg')"
      :rotation="currentData.current.wind_degree"
      text="Wind Direction"
      :value="setWindDirection"
    />
    <ListItem
      :iconSource="require('../assets/wind.svg')"
      text="Wind Speed"
      :value="setWindSpeed"
    />
    <ListItem
      :iconSource="require('../assets/gusts.svg')"
      text="Gusts"
      :value="setGusts"
    />
    <ListItem text="Pressure" :value="setPressure" />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import UVIndex from "../content/UVIndex.vue";

export default {
  props: {
    currentData: Object,
    isMetric: Boolean,
  },
  components: {
    ListItem,
    UVIndex,
  },

  computed: {
    setPrecipitation() {
      const data = this.currentData.current;
      return this.isMetric ? data.precip_mm + " mm" : data.precip_in + " in";
    },
    setHumidity() {
      return `${this.currentData.current.humidity}%`;
    },
    setPressure() {
      const data = this.currentData.current;
      return this.isMetric
        ? data.pressure_mb + " mb"
        : data.pressure_in + " in";
    },
    setWindDirection() {
      return `${this.currentData.current.wind_degree}° (${this.currentData.current.wind_dir})`;
    },
    setWindSpeed() {
      const data = this.currentData.current;
      return this.isMetric ? data.wind_kph + " kph" : data.wind_mph + " mph";
    },
    setGusts() {
      const data = this.currentData.current;
      return this.isMetric ? data.gust_kph + " kph" : data.gust_mph + " mph";
    },
    setVisibility() {
      const data = this.currentData.current;
      return this.isMetric ? data.vis_km + " km" : data.vis_miles + " miles";
    },
  },
  methods: {
    openDrawer(selection) {
      console.log(`${selection} clicked`);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>