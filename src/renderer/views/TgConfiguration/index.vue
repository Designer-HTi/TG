<template>
  <div class="h-full flex">
    <TgColumSlot class="flex-1/5" @handle-btn="handleBtn">
      <TgAccount btn-name="添加TG账户" />
    </TgColumSlot>
    <TgColumSlot class="flex-1/5" title="TG群列表" @handle-btn="handleBtn">
      <TgAccount btn-name="添加群"
    /></TgColumSlot>
    <TgColumSlot class="flex-3/5" title="监测关键词" @handle-btn="handleBtn">
      <KeyWordTable />
      <template #footer>
        <TgButton class="w-full" icon-name="add" @handle-btn="handleBtn">
          为所选栏目添加监测关键词
        </TgButton>
        <TgButton class="w-full" icon-name="add" @handle-btn="handleBtn">
          删除所选栏目关键词
        </TgButton>
      </template>
    </TgColumSlot>
  </div>
</template>

<script setup lang="ts">
import TgColumSlot from '@/components/tgColumnSlot/index.vue'
import TgAccount from './components/tgAccount.vue'
import KeyWordTable from './components/keyWordTable.vue'
import TgButton from '@/components/tgButton/index.vue'

const handleBtn = () => {
  console.log(111)
}
</script>

<style scoped lang="less"></style>
