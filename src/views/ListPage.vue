<template>
  <div>
      <top-nav></top-nav>
      <div class="container">
        <div class="list-wrapper">
          <list></list>
        </div>
      </div>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import topNav from "../components/top";
import bottomNav from "../components/bottom";
import list from "../components/list";

export default {
  name: "ListPage",
  components: { topNav, bottomNav, list },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 60px;
  padding-bottom: 60px;
}
.list-wrapper{
  padding: 30px;
}
</style>
