<template>
  <div class="flex flex-col justify-between w-full h-full content">
    <div class="head text-center">{{ title }}</div>
    <div class="w-full grow !px-16px !py-16px">
      <slot></slot>
    </div>
    <div class="flex justify-center items-center !px-16px footer">
      <slot name="footer">
        <TgButton @handle-btn="emit('handleBtn')">
          <el-icon><Delete /></el-icon>{{ btnName }}
        </TgButton>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import TgButton from '@/components/tgButton/index.vue'

withDefaults(
  defineProps<{
    title?: string
    btnName?: string
  }>(),
  {
    title: 'TG账户',
    btnName: '删除'
  }
)

const emit = defineEmits<{
  handleBtn: []
}>()
</script>

<style scoped lang="less">
.content {
  border-right: 1px solid @border-hr;
  .head {
    border-bottom: 1px solid @border-hr;
    height: 50px;
    line-height: 50px;
    font-weight: 500;
    color: #fff;
  }
  .footer {
    border-top: 1px solid @border-hr;
    height: 52px;
    .el-button {
      width: 100%;
      background-color: @button-fill;
    }
  }
}
</style>
