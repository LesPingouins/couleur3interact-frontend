<template>
  <router-view />
</template>
<script>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default {
  setup() {
    //creating dynamic meta tags
    const siteData = reactive({
      title: `Couleur3 Interact`,
      description: `Pingu dev team`,
    });
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
  async mounted() {
    //loading the store data when the app start
    await this.$store.commit("initialiseStore");
  },
};
</script>
