<template>
  <div>
      <div class="dropdown-wrapper">
        <div class="dropdown-selected" :class="{ show: isActive }" @click="SetActive">{{selected.Name}}</div>
        <ul class="dropdown-list">
            <li v-for="item in items" @click="SelectLi(item.Name)">{{item.Name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import $ from "jquery";
import bus from "../views/bus";
export default {
  name: "",
  data() {
    return {
      isActive: false,
      selected: {
        Id: 0,
        Name: this.items[0].Name
      }
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    SetActive: function(event) {
      this.isActive = !this.isActive;
    },
    SelectLi: function(val) {
      this.selected.Name = val;
      this.SetActive();
    }
  },
  created:function(){
    document.addEventListener('click', (e) => {
       if (!this.$el.contains(e.target)){
         this.isActive = false
       } 
   })
  }
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
}
.dropdown-selected {
  height: 36px;
  line-height: 34px;
  width: 120px;
  border: 1px solid #afafaf;
  padding-left: 10px;
  &.show {
    ~ .dropdown-list {
      display: block;
    }
  }
}
.dropdown-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
  border: 1px solid #afafaf;
  display: none;
  > li {
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
  }
}
</style>
