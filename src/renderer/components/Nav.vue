<template>
  <div class="siderbar">
    <div class="logobox">
      <div class="logo"><p>TG信息监测平台</p></div>
    </div>
    <div class="navbox">
      <div class="box-1 box">
        <p>工作台</p>
        <div class="navitem" @click="show">
          <el-icon><Plus /></el-icon>新增监测方案
        </div>
        <router-link
          v-for="item in planList"
          :key="item.id"
          class="navitem icon font_family icon-add"
          :to="{
            path: `/MonitoringPlan/${item.planType}`,
            query: {
              filters: item.filters
            }
          }"
        >
          {{ item.planName }}
        </router-link>
      </div>
      <div class="box-2 box">
        <p>TG管理</p>
        <router-link
          class="navitem icon font_family icon-telegram"
          :to="{ path: '/TgConfiguration' }"
        >
          TG配置
        </router-link>
        <!-- <p>数据库</p>
        <router-link class="navitem icon font_family icon-add" :to="{ path: '/DataCenter' }">
          数据中心
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import AddPlan from '@/views/MonitoringPlan/components/AddPlan.vue'
import { queryAllPlan } from '@/apis'
import { PlansRes } from '@/apis/types'
import mitts from '@/utils/mitts'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const addDialog = inject(ADD_DIALOG)!

onMounted(() => {
  mitts.on('updatePlanList', getPlan)
})

const show = () => {
  addDialog({
    title: '新增监测方案',
    width: '500px',
    component: shallowRef(AddPlan)
  })
}

onBeforeMount(() => {
  getPlan()
})

const planList = ref<PlansRes[]>()
const getPlan = async () => {
  try {
    const res = await queryAllPlan()
    planList.value = res.data
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="less">
.siderbar {
  display: flex;
  flex-direction: column;
  width: 240px;
  min-width: 240px;
  border-right: 1px solid @border-hr;
  .logobox {
    height: 64px;
    padding: 16px;
    .logo {
      width: 204px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      border: 1px solid #1f2023;
      box-shadow: 2px 4px 6px 0px rgba(0, 0, 0, 0.3) inset;
      font-size: 16px;
      font-family: 500;
      p {
        background: linear-gradient(270deg, #4ea7fc 0%, #fff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .navbox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;

    p {
      font-size: 12px;
      font-weight: 500;
      color: @Secondary-text;
    }
    .box {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .box-2 {
      margin-top: auto;
      padding-bottom: 48px;
    }
  }
  .navitem {
    color: @primary-text;
    cursor: pointer;
    display: flex;
    padding: 5px 8px;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      border-radius: 4px;
      background: @nav-hover;
    }
  }
}
</style>
