<template>
  <div>
      <top-nav></top-nav>
      <div class="container">
        <div class="list-wrapper">
          <list :items="listData"></list>
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
    return {
      data: [
        {
          categoryId: 1,
          data: [
            { image: "/src/assets/list.jpg", title: "唐诗1", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "唐诗2", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "唐诗3", time: "2017.11.28" }
          ]
        },
        {
          categoryId: 2,
          data: [
            { image: "/src/assets/list.jpg", title: "宋词1", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "宋词2", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "宋词3", time: "2017.11.28" }
          ]
        },
        {
          categoryId: 3,
          data: [
            { image: "/src/assets/list.jpg", title: "诗经1", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "诗经2", time: "2017.11.28" },
            { image: "/src/assets/list.jpg", title: "诗经3", time: "2017.11.28" }
          ]
        }
      ]
    };
  },
  computed: {
    listData: function() {
      for (var i = 0; i < this.data.length; i++) {
        if (this.$route.params.id == this.data[i].categoryId) {
          return this.data[i].data;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 60px;
  padding-bottom: 60px;
}
.list-wrapper {
  padding: 30px;
}
</style>
