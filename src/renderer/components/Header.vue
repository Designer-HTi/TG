<template>
  <div class="header">
    <div class="left">
      <div class="icon font_family icon-side-bar"></div>
      <p class="title">工作台</p>
      <p>></p>
      <p class="subheading">监测方案一</p>
    </div>
    <div class="right">
      <div class="time">周三 16:20:32</div>
      <div class="window">
        <div class="icon font_family icon-Subtract" @click="setWindowSize('min')"></div>
        <div class="icon font_family icon-Maximize" @click="setWindowSize('max')"></div>
        <div class="icon font_family icon-Dismiss" @click="setWindowSize('close')"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const setWindowSize = (type: string) => {
  window.electronApi.setWindowSize(type)
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid @border-hr;
  overflow: hidden;

  .left {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 1px;
    color: @title-text;
    gap: 4px;

    .subheading {
      font-size: 14px;
      color: @primary-text;
    }
  }
  .right {
    height: 100%;
    display: flex;
    align-items: end;
    .time {
      font-size: 14px;
      padding-bottom: 14px;
      line-height: 14px;
      color: @Secondary-text;
    }
    .window {
      position: absolute;
      right: 0;
      top: 0;
      display: inline-flex;
      padding: 4px 16px;
      align-items: flex-start;
      gap: 16px;
      border-radius: 0px 0px 0px 38px;
      border: 1px solid @border-hr;
      background: @bg-color-2;

      .icon {
        font-size: 12px;
      }
    }
  }
}
</style>
