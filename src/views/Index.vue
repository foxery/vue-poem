<template>
  <div class="container">
      <div class="text">
          <div>只是一想到你</div>
          <div>世界在明亮的光晕里倒退</div>
          <div>思君如满月</div>
          <div>夜夜减清辉</div>
      </div>
      <div class="line"></div>
      <div class="avatar" style="background-image:url(/src/assets/avatar.jpg);"></div>
      <div class="info-name">诗人名</div>
      <div class="info-time">朝代</div>
      <a href="/list" class="start">进入</a>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: #cddddc;
  padding: 30px;
}
.text {
  font-size: 18px;
  font-weight: bold;
  color: #547774;
  line-height: 1.5;
  font-family: cursive;
  margin-top: 30px;
}
.line {
  width: 30px;
  height: 4px;
  background-color: #547774;
  margin-top: 30px;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 2px 9px 0 rgba(#547774, 0.5);
  margin-top: 30px;
}
.info-name {
  font-size: 14px;
  color: #555;
  margin-top: 20px;
}
.info-time {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
.start{
    font-size: 14px;
    color: #547774;
    position: fixed;
    bottom: 30px;
    left: 30px;
}
</style>
