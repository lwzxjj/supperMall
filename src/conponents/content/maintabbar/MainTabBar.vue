<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_select.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_select.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="category">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_select.png" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-icon" src="~assets/img/tabbar/perfile.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/perfile_select.png" />
        <div slot="item-text">个人中心</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'conponents/common/tabbar/TabBar'
import TabBarItem from 'conponents/common/tabbar/TabBarItem'
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>