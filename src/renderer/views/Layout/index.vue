<template>
  <div class="flex flex-row w-full h-full">
    <Nav></Nav>
    <div class="flex-1 flex-col w-full h-full">
      <Header></Header>
      <div class="flex flex-1 h-full">
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
import Header from '@/components/Header.vue'
</script>

<style scoped lang="less"></style>
