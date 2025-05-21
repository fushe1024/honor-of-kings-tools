<script setup>
import { ref } from 'vue'

// 输入框内容
const input = ref('')

// 点击生成空白名
const generateName = () => {
  console.log('生成空白名')
}

// 点击重新生成
const generateNewName = () => {
  console.log('重新生成')
}

// 空白名数组
const emptyNames = ref([])

// 复制
const Copy = (row) => {
  /* eslint-disable no-undef */
  ElMessage.success(row.name + '复制成功')
}
</script>

<template>
  <div class="empty">
    <div class="head">
      <div class="ipt">
        <el-input
          v-model="input"
          disabled
          placeholder="请输入想要使用的游戏名字"
          clearable
        />
      </div>
      <div class="btns">
        <el-button type="primary" @click="generateName"> 生成空白名 </el-button>
        <el-button type="success" @click="generateNewName">
          重新生成
        </el-button>
      </div>
    </div>
    <div class="body">
      <el-table :data="emptyNames" height="100%">
        <el-table-column type="index" label="序号" width="100" />
        <el-table-column prop="name" label="名字" />
        <el-table-column label="操作" width="100" align="center">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="Copy(row)">
              复制
            </el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="No name data" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty {
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e8e8e8;

    .ipt {
      flex: 1;
      margin-right: 10px;
    }
  }

  .body {
    padding: 0 25px 0 0;
    height: calc(100vh - 193px);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid #e8e8e8;
  }
}
</style>
