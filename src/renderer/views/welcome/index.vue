<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/main')
}
</script>

<template>
  <h1>欢迎使用王者荣耀工具</h1>
  <el-button type="primary" @click="goHome">Primary</el-button>
</template>

<style scoped></style>
