<template>
  <div class="drawer-content">
    <component :is="getRecommendation"></component>
  </div>
  <a href="https://enviro.epa.gov/facts/uv/uv_descriptions.html" target="none">
    <img
      class="chart"
      :src="require('../../assets/uv-index-chart.svg')"
      alt="UV Index Chart"
  /></a>
  <h4>
    Find out
    <a href="https://www.epa.gov/sunsafety/uv-index-1" target="none">more</a>
    .
  </h4>
</template>

<script>
import UVIndexLow from "./UVIndexLow.vue";
import UVIndexModerate from "./UVIndexModerate.vue";
import UVIndexHigh from "./UVIndexHigh.vue";
import UVIndexVeryHigh from "./UVIndexVeryHigh.vue";
import UVIndexExtreme from "./UVIndexExtreme.vue";

export default {
  props: {
    indexValue: Number,
  },
  computed: {
    getRecommendation() {
      if (this.indexValue <= 2) {
        return UVIndexLow;
      } else if (this.indexValue <= 5) {
        return UVIndexModerate;
      } else if (this.indexValue <= 7) {
        return UVIndexHigh;
      } else if (this.indexValue <= 10) {
        return UVIndexVeryHigh;
      } else {
        return UVIndexExtreme;
      }
    },
  },
};
</script>

<style scoped>
.chart {
  margin: 1rem;
  width: min(100%, 24rem);
  object-fit: contain;
}
.drawer-content {
  text-align: left;
  text-indent: 2rem;
}
</style>