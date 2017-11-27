<template>
  <div class="bottom">
    <ul class="bottom-list">
        <li class="active">
            <a href="#">主页</a>
        </li>
        <li>
            <a href="#">发现</a>
        </li>
        <li>
            <a href="#">设置</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bottomNav",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

@function calculate-width ($col-span) {
    @return 100% / $col-span
};

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.bottom-list {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #c8cacd;
  border-top: 1px solid #f2f2f2;
  > li {
    text-align: center;
    float: left;
    margin: 0;
    padding: 0 15px;
    width: calculate-width(3);
    &.active {
      color: #505761;
      a {
        display: inline-block;
        border-top: 2px solid #06cf8a;
        line-height: 56px;
      }
    }
  }
}
</style>
