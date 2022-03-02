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
    <div>
      <p v-show="time">Updated {{ time }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    time: String,
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
</style>