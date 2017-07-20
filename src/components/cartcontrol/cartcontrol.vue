<template>
  <div class="cartcontrol">
    <transition>
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner inner1 icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      // 修改数据goods=>foods=>food的count，映射到原始数据中
      addCart (event) {
        // BScroll插件的点击事件不处理，防止一次单击出发两次事件
        if (!event._constructed) {
          return;
        }
        // 如果没有count属性，则设置为1
        if (!this.food.count) {
          // 这样vue可以监测到新增加的属性，触发购物车的计算属性
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        // 传递dom元素
        this.$emit('add-food', event.target);
        this.$emit('event', event.target);
      },
      decreaseCart (event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./cartcontrol.styl";
</style>
