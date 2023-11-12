<template>
  <div v-if="planCount !== 0" :key="planCount" class="flex">
    <DetailListVue v-for="i in planCount" :key="i" />
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

const route = useRoute()

const planCount = ref(0)
watch(
  route,
  (v) => {
    if (v.path !== '/MonitoringPlan') return
    planCount.value = Number(v.query.planCount as string)
  },
  {
    immediate: true
  }
)

const addDialog = inject(ADD_DIALOG)

const show = () => {
  addDialog?.({
    title: '新增监测方案',
    width: '500px',
    component: shallowRef(AddPlan),
    props: {
      type: 1
    },
    callBack: (v) => {
      console.log(v)
    }
  })
}
</script>

<style scoped lang="less">
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
