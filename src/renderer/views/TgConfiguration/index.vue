<template>
  <div class="h-full flex">
    <TgColumSlot class="flex-1/5" @handle-btn="addAccount">
      <TgAccount btn-name="添加TG账户" @handle-btn="addAccount" />
    </TgColumSlot>
    <TgColumSlot class="flex-1/5" title="TG群列表" @handle-btn="handleBtn">
      <TgAccount btn-name="添加群" @handle-btn="addTgGroup" />
    </TgColumSlot>
    <TgColumSlot class="flex-3/5" title="监测关键词" @handle-btn="handleBtn">
      <KeyWordTable />
      <template #footer>
        <TgButton class="w-full" icon-name="add" @handle-btn="addKeyWord">
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
import { ADD_DIALOG } from '@/components/dialog'
import TgButton from '@/components/tgButton/index.vue'
import TgColumSlot from '@/components/tgColumnSlot/index.vue'
import AddTgAccount from './components/AddTgAccount.vue'
import AddTgGroup from './components/AddTgGroup.vue'
import AddTgKeyWord from './components/AddTgKeyWord.vue'
import KeyWordTable from './components/keyWordTable.vue'
import TgAccount from './components/tgAccount.vue'

const addDialog = inject(ADD_DIALOG)

// 添加TG账户
const addAccount = () => {
  addDialog?.({
    title: '添加TG账户',
    width: '657px',
    component: shallowRef(AddTgAccount)
  })
}

// 添加TG账户
const addTgGroup = () => {
  addDialog?.({
    title: '添加TG群',
    width: '657px',
    component: shallowRef(AddTgGroup)
  })
}

//添加TG关键词
const addKeyWord = () => {
  addDialog?.({
    title: '添加TG群',
    width: '657px',
    component: shallowRef(AddTgKeyWord)
  })
}

const handleBtn = () => {
  console.log(111)
}
</script>

<style scoped lang="less"></style>
