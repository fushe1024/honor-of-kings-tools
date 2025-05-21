<script setup></script>

<template>
  <div class="navbar-container">
    <div class="nav-main">
      <router-link class="nav-item" to="/repeat">重复名</router-link>
      <router-link class="nav-item" to="/empty">空白名</router-link>
      <router-link class="nav-item" to="/score">最低战力</router-link>
      <router-link class="nav-item" to="/about">关于</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 50px;

  // 导航栏样式
  .nav-main {
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    padding: 5px;

    // 导航项
    .nav-item {
      display: block;
      padding: 6px 16px;
      font-size: 14px;
      color: #666;
      border-radius: 26px;
      font-weight: 500;
      white-space: nowrap;
      text-align: center;

      // 选中时的样式
      &.router-link-active {
        color: #333;
        border: 1px solid #5cd2dc;
        background-color: rgba(92, 210, 220, 0.1);
      }
    }
  }
}
</style>
