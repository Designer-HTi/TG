<template>
  <div class="flex justify-between">
    <p>{{ data.userName }}</p>
    <p>{{ data.createTime }}</p>
  </div>
  <div class="message" v-html="data.message"></div>
</template>

<script setup lang="ts">
import { MonitoringData } from '@/store/types/interface'

defineProps<{
  data: MonitoringData
}>()
</script>

<style scoped lang="less">
.message {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
