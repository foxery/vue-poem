<template>
  <div>
      <div class="banner"></div>
      <div class="content">
          <div>文章标题</div>
          <div>
              <div></div>
              <div>
                  <div>诗人名</div>
                  <div>朝代</div>
              </div>
          </div>
          <div>内容</div>
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
.content{
    padding: 30px 20px;
}
</style>
