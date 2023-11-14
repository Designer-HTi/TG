<template>
  <div class="siderbar">
    <div class="logo"><img src="../assets/img/Logo.png" alt="" /></div>
    <div class="navbox">
      <div class="box-1 box">
        <p>工作台</p>
        <div class="navitem icon font_family icon-add" @click="show">新增监测方案</div>
        <router-link
          class="navitem icon font_family icon-add"
          :to="{ path: '/MonitoringPlan', query: { planCount: 1 } }"
        >
          监测方案一
        </router-link>
        <router-link
          class="navitem icon font_family icon-add"
          :to="{ path: '/MonitoringPlan', query: { planCount: 2 } }"
        >
          监测方案二
        </router-link>
        <router-link
          class="navitem icon font_family icon-add"
          :to="{ path: '/MonitoringPlan', query: { planCount: 3 } }"
        >
          监测方案三
        </router-link>
      </div>
      <div class="box-2 box">
        <p>TG管理</p>
        <div class="navitem icon font_family icon-telegram" @click="handleMenu('Tg')">TG配置</div>
        <p>数据库</p>
        <router-link class="navitem icon font_family icon-add" to="DataCenter"
          >数据中心</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import AddPlan from '@/views/MonitoringPlan/components/AddPlan.vue'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const addDialog = inject(ADD_DIALOG)!

const show = () => {
  addDialog({
    title: '新增监测方案',
    width: '500px',
    showfooter: true,
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
.siderbar {
  display: flex;
  flex-direction: column;
  width: 240px;
  min-width: 240px;
  border-right: 1px solid @border-hr;
  .logo {
    height: 64px;

    img {
      padding: 16px;
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
