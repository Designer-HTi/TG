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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog(item, index, false, 'cancel')">Cancel</el-button>
          <el-button type="primary" @click="closeDialog(item, index, false, 'confirm')">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { dialogList, closeDialog, addDialog, ADD_DIALOG } from './index'

provide(ADD_DIALOG, addDialog)
</script>
