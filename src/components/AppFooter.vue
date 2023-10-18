<template>
  <footer>
    <a
      href="https://www.weatherapi.com/"
      target="_blank"
      title="Free Weather API"
      ><img
        src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
        alt="Weather data by WeatherAPI.com"
        border="0"
    /></a>
    <p>My web portfolio</p>
    <div v-if="time" class="updater">
      <p>Updated {{ time }}</p>
      <img
        title="Refresh data"
        v-show="canRefresh"
        :src="require('../assets/retry.svg')"
        alt="retry"
        class="footer-icon"
        :class="canRefresh ? 'selectable' : 'unselectable'"
        @click="refreshQuery(search)"
      />
    </div>
    <div v-else></div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      canRefresh: true,
    };
  },
  props: {
    time: String,
    search: String,
  },
  methods: {
    refreshQuery(search) {
      if (this.canRefresh) {
        this.canRefresh = false;
        this.$emit("refreshQuery", search);
        setTimeout(() => {
          this.canRefresh = true;
        }, 60000);
      }
    },
  },
};
</script>

<style scoped>
footer {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.unselectable:hover {
  cursor: not-allowed;
}
.selectable:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.updater {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
