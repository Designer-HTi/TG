<script setup lang="ts">
import Layout from '@/views/Layout/index.vue'
import DialogProvide from '@/components/dialog/index.vue'
import { getAllGroupKeyword } from './utils'
import useMonitoringData from '@/store/common/monitoringData'
import Socket from './utils/websocket'
import { MonitoringData } from './store/types/interface'
import { v4 as uuidv4 } from 'uuid'
import useConfig from './store/common/config'

const config = useConfig()
onBeforeMount(async () => {
  const data = await window.getConfig()
  config.setUrl(data.url)

  const wbSocket = new Socket<null, string>({ url: `ws://${config.$state.url}/websocket` })
  wbSocket.onmessage((data: MonitoringData) => {
    useMonitoringData().pushMonitoringData({ ...data, id: uuidv4() })
  })

  getAllGroupKeyword()
})
</script>

<template>
  <DialogProvide>
    <Layout />
  </DialogProvide>
</template>

<style lang="less"></style>
