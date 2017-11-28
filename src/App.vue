<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
}
body,
ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
