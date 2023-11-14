<template>
  <div class="flex-col items-center gap-8 !px-20">
    <p class="link">请在下方输入框输入你需要监测的群链接</p>

    <el-input v-model="chatUrl" class="w-280px">
      <template #append>
        <el-button link class="icon font_family icon-add" />
      </template>
    </el-input>

    <div class="w-280px urlList">
      <p>111111111111</p>
      <p>111111111111</p>
      <p>111111111111</p>
    </div>
  </div>

  <div class="flex justify-end !py-10px !mt-10">
    <TgButton icon-name="add" class="w-25" @handle-btn="handleBtn"> 完成 </TgButton>
  </div>
</template>

<script setup lang="ts">
import TgButton from '@/components/tgButton/index.vue'

const emit = defineEmits<{
  close: []
}>()

const chatUrl = ref('')

const handleBtn = () => {
  emit('close')
}
</script>

<style scoped lang="less">
.link {
  color: @primary;
}
.urlList {
  p {
    height: 38px;
    line-height: 38px;
    border-bottom: 1px solid @border-hr;
    color: @Secondary-text;
  }
}
</style>
