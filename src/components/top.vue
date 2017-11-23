<template>
  <div>
    <ul class="top-list">
        <li>
            <a href="#">唐诗</a>
        </li>
        <li>
            <a href="#">宋词</a>
        </li>
        <li>
            <a href="#">诗经</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-top",
  data() {
    return {};
  }
};
</script>

<style scoped>
.top-list {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.top-list > li {
  display: inline-block;
  margin: 0;
}
</style>
