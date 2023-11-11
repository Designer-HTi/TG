<template>
  <div class="flex flex-col h-full w-240px siderbar">
    <div class="logo">woshilogo</div>
    <div class="navbox">
      <div class="box-1 box">
        <p>工作台</p>
        <div class="navitem" @click="handleMenu('/')">新增监测方案</div>
        <div class="navitem" @click="handleMenu('/MonitoringPlan')">监测方案一</div>
      </div>
      <div class="box-2 box">
        <p>TG管理</p>
        <div class="navitem" @click="handleMenu('/TgConfiguration')">TG配置</div>
        <p>数据库</p>
        <div class="navitem" @click="handleMenu('/Not')">数据中心</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMenu = (path: string) => {
  router.push({
    path
  })
}
</script>

<style scoped lang="less">
.siderbar {
  border-right: 1px solid @border-hr;
  .logo {
    width: 100%;
    height: 64px;
    text-align: center;
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
    width: 192px;
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
