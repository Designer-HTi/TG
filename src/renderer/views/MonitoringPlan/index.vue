<template>
  <div v-if="planCount !== 0" class="flex">
    <DetailListVue
      v-for="i in planCount"
      :ref="(ref) => detailListRef && (detailListRef[i] = ref)"
      :key="i"
      :count="i"
      @save="save"
    />
  </div>
  <div v-else class="content">
    <div class="img"></div>
    <div>暂无无监测方案，<a @click="show"> 请点我添加</a>监测方案</div>
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import DetailListVue from './components/DetailList.vue'
import AddPlan from './components/AddPlan.vue'
import usePlanStore from '@/store/common/usePlan'
import { updatePlan } from '@/apis'
import { SUCCESS_CODE } from '@/constants'

// const route = useRoute()
const usePlan = usePlanStore()

const planCount = ref(0)

watch(usePlan.$state, (v) => {
  planCount.value = Number(v.planType)
})

const addDialog = inject(ADD_DIALOG)

const show = () => {
  addDialog?.({
    title: '新增监测方案',
    width: '500px',
    component: shallowRef(AddPlan)
  })
}

const detailListRef = ref<(Element | ComponentPublicInstance | null)[]>()
const save = async (data: number[], i: number) => {
  const planData = usePlan.$state
  planData.filters[i - 1].groupList = data.map((v) => {
    return {
      accountId: '',
      id: v
    }
  })
  const res = await updatePlan(usePlan.$state.id, planData)
  if (res.code === SUCCESS_CODE) {
    ElMessage.success('保存成功')
    // detailListRef.value?.[i].close()
  }
}
</script>

<style scoped lang="less">
.content {
  flex-direction: column;
  align-items: center;

  .img {
    width: 800px;
    height: 600px;
    background: url(../../assets/img/kong.png) no-repeat center;
  }

  div {
    font-weight: normal !important;
  }
  a {
    color: @primary;
    display: inline-block;
  }
}
</style>
