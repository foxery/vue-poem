<template>
  <div>
    <ul class="list">
      <li v-for="item in items">
        <router-link :to="{ name: 'listDetail', params: { id:item.id  }}" class="block">
            <div class="list-left" :style="{'background-image': 'url('+item.image+')'}"></div>
            <div class="list-right">
                <div class="title">{{item.title}}</div>
                <div class="time">{{item.time}}</div>
            </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.block {
  display: block;
}
.list-left {
  float: left;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.list-right {
  float: left;
  padding: 0 0 0 15px;
  width: calc(100% - 100px);
}
.title {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
.time {
  font-size: 12px;
  color: #bfc2c5;
  margin-top: 15px;
}
.list {
  > li {
    display: block;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
    a {
      &:before,
      &:after {
        content: " ";
        display: table;
      }
      &:after {
        clear: both;
      }
    }
    + li {
      margin-top: 30px;
    }
  }
}
</style>
