<template>
  <div>
      <div class="banner"></div>
      <div class="content">
          <div class="title">{{data.title}}</div>
          <div class="info-wrapper">
              <div class="avatar" :style="{'background-image': 'url('+data.avatar+')'}"></div>
              <div class="info">
                  <div class="info-name">{{data.name}}</div>
                  <div class="info-time">{{data.time}}</div>
              </div>
          </div>
          <div class="content-text">{{data.content}}</div>
      </div>
      <div class="bottom-bar">
          <div class="back" @click="back">返回</div>
          <!-- <div class="handle">收藏</div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "ListDetail",
  data() {
    return {
      details: [
        {
          id: 1,
          time: "2017.12.4",
          title: "唐诗1",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容1"
        },
        {
          id: 2,
          time: "2017.12.4",
          title: "唐诗2",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容2"
        },
        {
          id: 3,
          time: "2017.12.4",
          title: "唐诗3",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容3"
        },
        {
          id: 4,
          time: "2017.12.4",
          title: "宋词1",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容4"
        },
        {
          id: 5,
          time: "2017.12.4",
          title: "宋词2",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容5"
        },
        {
          id: 6,
          time: "2017.12.4",
          title: "宋词3",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容6"
        },
        {
          id: 7,
          time: "2017.12.4",
          title: "诗经1",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容7"
        },
        {
          id: 8,
          time: "2017.12.4",
          title: "诗经2",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容8"
        },
        {
          id: 9,
          time: "2017.12.4",
          title: "诗经3",
          avatar: "/src/assets/avatar.jpg",
          name: "苏轼",
          content: "内容9"
        }
      ],
      data: []
    };
  },
  created: function() {
    this.show();
  },
  methods: {
    show: function() {
      this.details.forEach((val) => {
        if (val.id == this.$route.params.id) {
          this.data = val;
          return false;
        }
      });
    },
    back:function(){
      this.$router.go(-1);
    }
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
.content-text {
  font-size: 14px;
  color: #555;
}
.bottom-bar {
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
.back {
  // float: left;
  color: #444;
  // width: 60%;
  padding-left: 30px;
}
// .handle {
//   float: left;
//   width: 40%;
//   background-color: #00cf88;
//   color: #fff;
//   text-align: center;
// }
</style>
