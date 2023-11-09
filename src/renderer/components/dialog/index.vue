<template>
  <slot></slot>
  <Teleport to="body">
    <el-dialog
      v-for="(item, index) in dialogList"
      :key="index"
      v-model="item.visible"
      :title="item.title"
      :width="item.width"
      @close="() => closeDialog(item, index, false)"
    >
      <component
        :is="item.component"
        v-bind="item.props"
        @close="(args) => closeDialog(item, index, false, args)"
      />
    </el-dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { dialogList, closeDialog, addDialog, ADD_DIALOG } from './index'

provide(ADD_DIALOG, addDialog)
</script>
