<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  height: 49px;
  background-color: #f0f0f0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px #dfdddd;
}
</style>