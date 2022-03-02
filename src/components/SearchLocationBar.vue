<template>
  <div>
    <form @submit="OnSubmit">
      <label for="searchLocation">{{ searchHeader }}</label>
      <div>
        <input
          id="searchLocation"
          type="text"
          placeholder="Location..."
          v-model="search"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    country: String,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    OnSubmit(e) {
      e.preventDefault();
      this.$emit("searchSubmitted", this.search);
    },
  },
  computed: {
    searchHeader() {
      return this.country || "Search location for weather data...";
    },
  },
};
</script>


<style scoped>
* {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
div {
  margin: 1rem;
}
input {
  height: 1.5rem;
  width: 15rem;
  padding: 0.25rem;
  border-radius: 0.25rem 0 0 0.25rem;
  margin-right: 0;
}
button {
  height: 1.5rem;
  box-sizing: content-box;
  margin-left: 0;
  padding: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: rgba(15, 25, 35, 0.5);
  color: white;
}
</style>>

