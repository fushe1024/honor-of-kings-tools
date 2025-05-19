<script setup></script>

<template>
  <div class="layout">
    <!-- 导航 -->
    <div class="slide-tabs-container">
      <div class="slide-tabs-nav">
        <router-link class="nav-item" to="/repeat">重复名</router-link>
        <router-link class="nav-item" to="/empty">空白名</router-link>
        <router-link class="nav-item" to="/score">战力</router-link>
        <router-link class="nav-item" to="/about">关于</router-link>
      </div>
    </div>
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

  .slide-tabs-container {
    width: auto;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    .slide-tabs-nav {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 30px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      padding: 5px;

      .nav-item {
        display: block;
        padding: 6px 16px;
        font-size: 14px;
        color: #666;
        border-radius: 26px;
        font-weight: 500;
        white-space: nowrap;
        text-align: center;

        &.router-link-active {
          color: #333;
          border: 1px solid #5cd2dc;
          background-color: rgba(92, 210, 220, 0.1);
        }
      }
    }
  }
}
</style>
