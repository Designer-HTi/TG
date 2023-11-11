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
      >
        <slot></slot>
      </component>
      <template v-if="item.showfooter" #footer>
        <span class="dialog-footer">
          <el-button @click="item.callBack?.('cancel')">
            {{ item.cancelName || '取消' }}
          </el-button>
          <el-button type="primary" @click="item.callBack?.('confirm')">
            {{ item.confirmName || '确认' }}
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
