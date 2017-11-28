<template>
  <div>
      <div class="banner"></div>
      <div class="content">
          <div class="title">文章标题</div>
          <div class="info-wrapper">
              <div class="avatar" style="background-image:url(/src/assets/avatar.jpg);"></div>
              <div class="info">
                  <div class="info-name">诗人名</div>
                  <div class="info-time">朝代</div>
              </div>
          </div>
          <div class="content-text">内容</div>
      </div>
      <div class="bottom-bar">
          <div class="back">返回</div>
          <div class="handle">收藏</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ListDetail",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/src/assets/banner.jpg);
}
.content {
  padding: 30px 20px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #444;
}
.info-wrapper {
  margin-top: 25px;
  margin-bottom: 25px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
}
.info {
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}
.info-name {
  font-size: 14px;
  color: #555;
}
.info-time {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
.content-text{
    font-size: 14px;
    color: #555;
}
.bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #f2f2f2;
    font-size: 14px;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
}
.back{
    float: left;
    color: #444;
    width: 60%;
    padding-left: 30px;
}
.handle{
    float: left;
    width:40%;
    background-color: #00cf88;
    color: #fff;
    text-align: center;
}
</style>
