<template>
  <div class="flex flex-col">
    <div class="p-3 text-center cursor-pointer" @click="handleMenu('/')">Home</div>
    <div class="p-3 text-center cursor-pointer" @click="handleMenu('About')">About</div>
    <div class="p-3 text-center cursor-pointer" @click="handleMenu('Not')">Not</div>
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

<style scoped></style>
