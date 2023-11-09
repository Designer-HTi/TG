<template>
  <div class="flex flex-col w-full h-full">
    <div class="h-20 bg-neutral-200"></div>
    <div class="grow flex">
      <div class="w-1/5 bg-neutral-400">
        <Nav></Nav>
      </div>
      <div class="flex-1 bg-neutral-600">
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

<style scoped></style>
