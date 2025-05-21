<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/main')
}
</script>

<template>
  <video
    class="bg-video"
    autoplay
    loop
    muted
    src="../../assets/video/hd_bg2.webm"
  />
  <div class="main">
    <div class="logo-box">
      <div class="logo-bg"></div>
      <div class="title" @click="goHome">欢迎使用(点我进入)</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 背景视频
.bg-video {
  width: inherit;
  height: inherit;
}

// 主页面
.main {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  // logo
  .logo-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    // logo背景
    .logo-bg {
      width: 40vh;
      height: 20vh;
      background: url('../../assets/logo.png') no-repeat center;
      background-size: cover;
    }

    // logo文字
    .title {
      color: #e4bf7f;
      font-size: 20px;
      line-height: 1.5em;
      cursor: pointer;
    }
  }
}
</style>
