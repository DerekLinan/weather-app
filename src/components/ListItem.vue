<template>
  <div class="outer">
    <div v-if="hasSource" class="icon">
      <img :src="iconSource" />
      <img
        v-if="rotation"
        class="dial"
        :src="require('../assets/compass-dial.svg')"
        :style="dialRotation"
      />
    </div>
    <div v-else class="empty-icon"></div>
    <div class="inner">
      <h3>{{ this.text }}</h3>
      <h3>{{ this.value }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSource: String,
    text: String,
    value: [Number, String],
    rotation: [Number],
  },
  computed: {
    hasSource() {
      return this.iconSource ? true : false;
    },
    dialRotation() {
      return { "--dial-angle": this.rotation + "deg" };
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
}
.dial {
  position: absolute;
  left: 0%;
  top: 0%;
  bottom: 0;
  right: 0%;
  transform: rotate(var(--dial-angle));
}
.empty-icon {
  width: 3rem;
  height: 3rem;
}
.icon {
  position: relative;
  height: min(100%, 3rem);
}
.outer {
  display: flex;
  padding: 0.25rem;
  gap: 0.25rem;
  height: min(3rem);
  width: max(40rem);
  align-items: center;
  margin: 0.25rem;
}
.inner {
  margin: 0.25rem;
  padding: 0.25rem;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
}
</style>