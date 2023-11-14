<template>
  <div class="flex flex-row w-full h-full">
    <Nav></Nav>
    <div class="flex flex-1 flex-col w-full h-full">
      <Header></Header>
      <router-view v-slot="{ Component }" class="layout">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
</script>

<style scoped lang="less">
.layout {
  flex: 1;
  display: flex;
  height: calc(100% - 64px);
}
</style>
