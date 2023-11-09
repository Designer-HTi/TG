<script setup lang="ts">
import Layout from './views/Layout/index.vue'
import DialogProvide from './components/dialog/index.vue'
// import Socket from './utils/websocket'

// const wbSocket = new Socket<null, string>({ url: '127.0.0.1:3000' })
// wbSocket.onmessage((data: string) => {
//   const str = JSON.stringify(data)
//   console.log('server data:', str)
// })
</script>

<template>
  <DialogProvide>
    <Layout />
  </DialogProvide>
</template>

<style lang="less"></style>
