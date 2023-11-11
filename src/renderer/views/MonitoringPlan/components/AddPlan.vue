<template>
  <div class="content">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="方案名称">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-radio-group v-model="radio1" class="radio">
        <div class="radiobox">
          <img src="@/assets/img/radio1.png" alt="" />
          <el-radio label="1" size="large">单看板</el-radio>
        </div>
        <div class="radiobox">
          <img src="@/assets/img/radio2.png" alt="" />
          <el-radio label="2" size="large">双看板</el-radio>
        </div>
        <div class="radiobox">
          <img src="@/assets/img/radio3.png" alt="" />
          <el-radio label="3" size="large">三看板</el-radio>
        </div>
      </el-radio-group>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('top')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})
const props = withDefaults(
  defineProps<{
    type?: number
  }>(),
  {
    type: 2
  }
)

const radio1 = ref('1')

// const emits = defineEmits<{
//   close: [number[]]
// }>()

onMounted(() => {
  console.log(props.type)
})

// const close = () => {
//   emits('close', [3, 4, 5])
// }
</script>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;

  .el-radio-group {
    margin-top: 24px;
    gap: 48px;
  }
  .radiobox {
    img {
      width: 100%;
      height: 100%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
