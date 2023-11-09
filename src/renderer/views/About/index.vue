<template>
  <div>About</div>
  <el-button link class="icon font_family icon-add" type="danger"></el-button>
  <div @click="close">close</div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: number
  }>(),
  {
    type: 2
  }
)

const emits = defineEmits<{
  close: [number[]]
}>()

onMounted(() => {
  console.log(props.type)
})

const close = () => {
  emits('close', [3, 4, 5])
}
</script>

<style scoped></style>
