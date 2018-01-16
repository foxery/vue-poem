<template>
  <div>
      <dropdown :items="listData"></dropdown>
      <dropdown :items="listData2"></dropdown>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from "../components/bottom";
import dropdown from "../components/dropdown";
export default {
  name: "",
  components: { bottomNav, dropdown },
  data() {
    return {
      listData: [
        {
          Name: "测试1"
        },
        {
          Name: "测试2"
        }
      ],
      listData2: [
        {
          Name: "测试3"
        },
        {
          Name: "测试4"
        }
      ]
    };
  },
  created:function(){
    document.addEventListener('click', (e) => {
       console.log("test...");
   })
  }
};
</script>

<style lang="scss" scoped>

</style>
