<template>
  <div class="textlinkchat">
    <p>
      <a :href="link" target="_blank" v-if="link">{{ linkText }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "TextLinkChat",
  props: {
    link: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: "Cliquer ici",
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--red);
}
</style>
