<template>
  <div class="flex-col items-center gap-8 !px-20">
    <p class="link">请在下方输入框输入你需要监测的群链接</p>

    <el-input v-model="chatUrl" class="w-280px">
      <template #append>
        <el-button link class="icon font_family icon-add" />
      </template>
    </el-input>

    <div class="w-280px urlList flex flex-wrap gap-10px">
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
      <el-tag closable type="info"> 1111111111 </el-tag>
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
  max-height: 150px;
  padding: 5px 0;
  overflow-y: auto;
  .el-tag {
    padding: 0 8px;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
    border: 1px solid @button-stroke;
    color: @Secondary-text;
  }
}
</style>
