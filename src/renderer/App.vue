<script setup lang="ts">
import Layout from '@/views/Layout/index.vue'
import DialogProvide from '@/components/dialog/index.vue'
import { getAllGroupKeyword } from './utils'
import useMonitoringData from '@/store/common/monitoringData'
import Socket from './utils/websocket'
import { MonitoringData } from './store/types/interface'
import { v4 as uuidv4 } from 'uuid'

const wbSocket = new Socket<null, string>({ url: 'ws://172.208.105.151/websocket' })
wbSocket.onmessage((data: MonitoringData) => {
  console.log('server data:', { ...data, id: uuidv4() })
  useMonitoringData().pushMonitoringData({ ...data, id: uuidv4() })
})

onMounted(async () => {
  getAllGroupKeyword()
  console.log(await window.getConfig())
})
</script>

<template>
  <DialogProvide>
    <Layout />
  </DialogProvide>
</template>

<style lang="less"></style>
