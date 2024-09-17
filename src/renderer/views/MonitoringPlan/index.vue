<template>
  <div v-if="planCount == 0" class="content">
    <div class="img"></div>
    <div>暂无无监测方案，<a @click="show"> 请点我添加</a>监测方案</div>
  </div>
  <div v-else :key="usePlan.$state.id" class="flex layout">
    <DetailListVue
      v-for="i in planCount"
      :ref="(ref) => detailListRef && (detailListRef[i] = ref)"
      :key="i"
      :count="i"
      @save="save"
    />
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import DetailListVue from './components/DetailList.vue'
import AddPlan from './components/AddPlan.vue'
import usePlanStore from '@/store/common/usePlan'
import { updatePlan } from '@/apis'
import { SUCCESS_CODE } from '@/constants'
import mitts from '@/utils/mitts'

const usePlan = usePlanStore()

const planCount = computed(() => Number(usePlan.$state.planType))

const addDialog = inject(ADD_DIALOG)

const show = () => {
  addDialog?.({
    title: '新增监测方案',
    width: '500px',
    component: shallowRef(AddPlan)
  })
}

const detailListRef = ref<(Element | ComponentPublicInstance | null)[]>()
const save = async (data: string[], i: number) => {
  const planData = usePlan.$state
  if (!planData.filters) {
    planData.filters = []
  }
  if (!planData.filters[i - 1]) {
    planData.filters[i - 1] = {
      groupList: [],
      keyWordsList: []
    }
  }
  planData.filters[i - 1].keyWordsList = data.map((v) => {
    return {
      groupId: '',
      id: v
    }
  })
  const res = await updatePlan(usePlan.$state.id, planData)
  if (res.code === SUCCESS_CODE) {
    mitts.emit('updatePlanList')
    usePlan.setPlan(planData)
    ElMessage.success('保存成功')
  } else {
    ElMessage.warning(res.message)
  }
}
</script>

<style scoped lang="less">
.layout {
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  overflow: hidden;
}
.content {
  display: flex;
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
