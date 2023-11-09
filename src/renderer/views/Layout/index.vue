<template>
  <div class="flex flex-row w-full h-full">
    <Nav></Nav>
    <div class="flex-1 flex-col w-full h-full">
      <div class="w-full h-64px"></div>
      <div class="flex-1 c-black">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from '@/components/Nav.vue'
</script>

<style scoped lang="less"></style>
