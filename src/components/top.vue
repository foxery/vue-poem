<template>
  <div class="header">
    <ul class="top-list">
      <li v-for="item in items" @click="setActive(item.category)" :class="{active: activeName == item.category}">
        <a>{{item.category}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topNav",
  data() {
    return {
      items: [
        { category: "唐诗", id: 1 },
        { category: "宋词", id: 2 },
        { category: "诗经", id: 3 }
      ],
      activeName: ""
    };
  },
  methods: {
    setActive: function(name) {
      this.activeName = name;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.top-list {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #c8cacd;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 15px;
  > li {
    display: inline-block;
    margin: 0;
    padding: 0 15px;
    &.active {
      color: #505761;
      a {
        display: inline-block;
        border-bottom: 2px solid #06cf8a;
        line-height: 55px;
      }
    }
    a {
      &.active {
        display: inline-block;
        border-bottom: 2px solid #06cf8a;
        line-height: 55px;
        color: #505761;
      }
    }
  }
}
</style>
