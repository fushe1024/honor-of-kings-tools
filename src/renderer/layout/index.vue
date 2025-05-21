<script setup>
import Navbar from '@/components/Navbar/index.vue'
</script>

<template>
  <div class="layout">
    <!-- 导航 -->
    <Navbar />
    <!-- 内容 -->
    <div class="view-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-top: 80px;
  margin: 0 100px;
  height: calc(100vh - 80px);
}
</style>
