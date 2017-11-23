<template>
  <div>
      <v-top></v-top>
      <v-list></v-list>
      <v-bottom></v-bottom>
  </div>
</template>

<script>
import vTop from "../components/top";
import vBottom from "../components/bottom";
import vList from "../components/list";

export default {
  name: "ListPage",
  components: { vTop, vBottom, vList },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
