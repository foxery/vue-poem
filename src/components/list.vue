<template>
  <div>
    <ul class="list">
        <li>
            <div class="list-left" style="background-image: url('/src/assets/list.jpg');"></div>
            <div class="list-right">
                <div class="title">文章标题</div>
                <div class="time">时间</div>
            </div>
        </li>
        <li>
            <div class="list-left" style="background-image: url('/src/assets/list.jpg');"></div>
            <div class="list-right">
                <div class="title">文章标题</div>
                <div class="time">时间</div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
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
    + li {
      margin-top: 30px;
    }
  }
}
</style>
