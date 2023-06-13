<template>
  <div class="bargraphresult">
    <div
      class="bar"
      :data-name="name"
      :style="{ width: percentage, background: color }"
    ></div>
    <div
      class="bar-back"
      :data-votecount="voteCount"
      :style="{ width: '100%', background: '#DADADA' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BarGraphResult",
  props: {
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: String,
      required: true,
    },
    voteCount: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style scoped>
.bargraphresult .name {
  opacity: 1;
}
.bargraphresult {
  font-family: var(--big-text);
}
.bargraphresult .bar {
  border-radius: 99px 0px 0px 99px;
  height: 55px;
  top: 55px;

  position: relative;
  width: 0;
  z-index: 1;
}
.bargraphresult .bar-back {
  border-radius: 99px;
  height: 55px;
  overflow: hidden;
  position: relative;
  width: 0;
}

.bargraphresult .bar::after {
  color: var(--black);
  content: attr(data-name);
  position: absolute;
  left: 7%;
  top: 27%;
  padding-left: 15px;
}

.bargraphresult .bar-back::after {
  color: var(--black);
  content: attr(data-votecount);
  position: absolute;
  right: 4%;
  top: 27%;
  padding-right: 15px;
}
</style>
