<template>
  <div class="flex-col items-center gap-8 !px-20">
    <el-steps class="w-full" :active="active">
      <el-step title="步骤1" description="添加TG智能监测机器人" />
      <el-step title="步骤2" description="添加TG Chat ID" />
    </el-steps>

    <div v-if="active === 1" class="info flex justify-between">
      <div>https://t.me/TGAiYQbot</div>
      <el-button link class="icon font_family icon-add"></el-button>
    </div>

    <el-input v-else v-model="chatId" class="w-280px"></el-input>

    <a v-if="active === 1" class="link" url="https://www.bilibili.com/"
      >点我打开链接添加TG智能监测机器人</a
    >
    <a v-else class="link">在上方输入框输入你的TG Chat ID</a>
  </div>
  <div class="flex justify-end !py-10px !mt-10">
    <TgButton class="w-25" @handle-btn="next">
      {{ active === 1 ? '下一步' : '上一步' }}
    </TgButton>
    <TgButton v-if="active === 2" class="w-25" @handle-btn="handleBtn">
      <el-icon><Check /></el-icon>完成
    </TgButton>
  </div>
</template>

<script setup lang="ts">
import { createUser } from '@/apis'
import TgButton from '@/components/tgButton/index.vue'
import { ElMessage } from 'element-plus'

const emit = defineEmits<{
  close: [string]
}>()

const active = ref(1)

const chatId = ref('')

const next = () => {
  active.value = active.value === 1 ? 2 : 1
}
const handleBtn = async () => {
  try {
    const res = await createUser({
      chatId: chatId.value
    })
    ElMessage.success('新增成功')
    if (res.code === 'success') {
      emit('close', 'update')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="less">
.info {
  width: 280px;
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  background-color: @button-fill;
}
.link {
  color: @primary;
}
</style>
