<template>
  <div class="h-full flex flex-col gap-10px">
    <TgButton class="w-full" icon-name="add" @handle-btn="emit('handleBtn')">{{
      btnName
    }}</TgButton>
    <div class="grow h-0 overflow-y-auto">
      <Checkbox
        v-model:modelValue="checkAll"
        :indeterminate="isIndeterminate"
        label="全部"
        class="w-full"
        @change="handleCheckAllChange"
      />
      <el-checkbox-group v-model="checkList" class="w-full">
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
        <Checkbox class="w-full" label="111" />
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from '@/components/checkbox/index.vue'
import TgButton from '@/components/tgButton/index.vue'

defineProps<{
  btnName: string
}>()

const emit = defineEmits<{
  handleBtn: []
}>()

const checkAll = ref(false)
const isIndeterminate = ref(false)
const checkList = ref<string[]>([])

const handleCheckAllChange = (v: boolean) => {
  checkList.value = v ? ['111'] : []
}
</script>

<style scoped></style>
