<template>
  <div class="tab-bar-item" @click="clickLink">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
   name: 'Tabbaritem',
   props: {
     path: String
   },
   data() {
      return {
        isActive: false
      }
   },
   methods:{
     clickLink() {
       this.$router.replace(this.path)
     }
   }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red
}
</style>